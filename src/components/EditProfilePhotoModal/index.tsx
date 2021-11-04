import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useDropzone } from 'react-dropzone';
import { IoMdClose, IoMdCheckmark } from 'react-icons/io';
import { MdAddAPhoto } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import api from '../../services/api';
import { ApiResponseUser, User } from '../../services/hooks/useUser';
import { updateUser } from '../../store/modules/user/actions';
import { sliceStringWithDots } from '../../util/sliceStringWithDots';

import {
  Overlay,
  ModalContainer,
  DropContainer,
  UploadMessage,
  Preview,
  FileInfo,
  ProgressBar,
} from './styles';

type FormattedFile = {
  file: File;
  name: string;
  formattedFileName: string;
  preview: string;
  url: string | null;
};

interface EditProfilePhotoModalProps {
  isOpen: boolean;
  onRequestClose: (value: boolean) => void;
  user?: User;
}

export const EditProfilePhotoModal = ({
  isOpen,
  onRequestClose,
  user,
}: EditProfilePhotoModalProps) => {
  const dispatch = useDispatch();

  const [uploadedFile, setUploadedFile] = useState<FormattedFile>(null);
  const [UploadProgress, setUploadProgress] = useState(0);

  const handleUpload = (files: File[]) => {
    const formattedFileName =
      files[0].name.length > 30
        ? sliceStringWithDots(files[0].name, 25)
        : files[0].name;

    const uploadedFile = {
      file: files[0],
      name: files[0].name,
      formattedFileName,
      preview: URL.createObjectURL(files[0]),
      url: null,
    };

    setUploadedFile(uploadedFile);
  };

  const handleConfirmUpload = (uploadedFile: FormattedFile) => {
    const reader = new FileReader();

    reader.readAsDataURL(uploadedFile.file);
    reader.onload = async () => {
      const { data } = await api.put<ApiResponseUser>(
        `usuarios/imagem-usuario`,
        {
          base64Image: reader.result,
          fileName: uploadedFile.name,
        },
        {
          onUploadProgress: (e) => {
            const progress = parseInt(
              `${Math.round((e.loaded * 100) / e.total)}`
            );

            setUploadProgress(progress);

            if (progress === 100) {
              setTimeout(() => {
                onRequestClose(false);
                setUploadProgress(0);
                setUploadedFile(null);
              }, 1500);
            }
          },
          headers: {
            Authorization: `CaseMaker ${user.token}`,
          },
        }
      );

      data.usuario.token = user.token;

      dispatch(updateUser(data.usuario));

      const serialUser = JSON.stringify({
        email: data.usuario.email,
        nome: data.usuario.nome,
        token: data.usuario.token,
        _id: data.usuario._id,
        imageUrl: data.usuario.imageUrl,
      });

      localStorage.setItem('@caseMaker:user', serialUser);
    };
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: 'image/jpeg, image/png',
      onDropAccepted: handleUpload,
      maxFiles: 1,
    });

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <>
          <MdAddAPhoto />
          <UploadMessage>
            {isMobile
              ? 'Clique sobre a área e escolha uma foto'
              : 'Arraste sua foto aqui ou clique sobre a área pontilhada'}
          </UploadMessage>
        </>
      );
    }

    if (isDragReject) {
      return (
        <>
          <IoMdClose size={40} color="#f04343" />
          <UploadMessage type="error">Arquivo não suportado</UploadMessage>
        </>
      );
    }

    return (
      <>
        <IoMdCheckmark size={40} color="#00d172" />
        <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
      </>
    );
  };

  if (isOpen) {
    return (
      <Overlay>
        <ModalContainer>
          {uploadedFile ? (
            <>
              <Preview src={uploadedFile.preview} />
              {!!UploadProgress && <ProgressBar percent={UploadProgress} />}
              <FileInfo>
                <span>{uploadedFile.formattedFileName}</span>

                <div>
                  <button onClick={() => setUploadedFile(null)}>
                    Cancelar
                  </button>
                  <button onClick={() => handleConfirmUpload(uploadedFile)}>
                    Confirmar
                  </button>
                </div>
              </FileInfo>
            </>
          ) : (
            <>
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <input {...getInputProps()} />
                {renderDragMessage(isDragActive, isDragReject)}
              </DropContainer>
              <button onClick={() => onRequestClose(false)}>Cancelar</button>
            </>
          )}
        </ModalContainer>
      </Overlay>
    );
  } else {
    return <></>;
  }
};
