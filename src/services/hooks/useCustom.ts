import { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import api from '../../services/api';

import { toast } from 'react-toastify';
import { convertSvgToPng } from '../../util/convertSvgToPng';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';
import { IState } from '../../store';
import { User } from '../../services/hooks/useUser';
import { isMobile } from 'react-device-detect';

interface useCustomData {
  handleSelectColor: (color: string) => void;
  handleSelectRenderCase: (render: any) => void;
  handleAddToCart: () => void;
  selectedColor: string;
  setMenuOption: React.Dispatch<React.SetStateAction<string>>;
  menuOption: string;
  menuContent: MenuContentState;
  renderCase: any;
  id: string;
}

interface Skin {
  nome: string;
  skin: string;
  skinAplicada: string;
}

interface Led {
  cor: string;
  corAplicada: string;
}

export interface MenuContentState {
  colors: string[];
  skins: Skin[];
  leds: Led[];
}

interface MenuApiResponse {
  opcao: {
    skins: Skin[];
    leds: Led[];
  };
}

interface ApiResponse {
  produto: IProduct;
}

const colors = [
  '#6ECC4D',
  '#4DCC80',
  '#CC4D4D',
  '#CC4D6B',
  '#CC7A4D',
  '#eedc3f',
  '#4D59CC',
  '#4D9ECC',
  '#4DC4CC',
  '#7D4DCC',
  '#664DCC',
  '#BA4DCC',
  '#333333',
  '#4d4d4d',
  '#f2f2f2',
  '#00D172',
];

export const useCustom = (): useCustomData => {
  const [menuOption, setMenuOption] = useState('Cores');
  const [renderCase, setRenderCase] = useState(null);
  const [menuContent, setMenuContent] = useState<MenuContentState>({
    colors,
    skins: [],
    leds: [],
  });
  const [selectedColor, setSelectedColor] = useState('#333333');
  const user = useSelector<IState, User>((state) => state.user);

  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadOptions() {
      try {
        const { data } = await api.get<MenuApiResponse>(`opcao?produto=${id}`);

        setMenuContent((oldState) => {
          return {
            ...oldState,
            skins: data.opcao.skins,
            leds: data.opcao.leds,
          };
        });
      } catch (e) {
        console.log(e);
      }
    }
    loadOptions();

    if (id === 0 && !isMobile) {
      toast.warning('Selecione um gabinete na Tela Principal');
    }
  }, [id]);

  const handleSelectColor = useCallback((color: string) => {
    setSelectedColor(color);
  }, []);

  const handleSelectRenderCase = useCallback((render: any) => {
    setRenderCase(render);
  }, []);

  const handleAddToCart = async () => {
    if (!user.email) {
      toast.warn('Para adicionar ao carrinho é necessário estar logado');
      return;
    }

    let src;
    const optionColorsIsSelected = menuOption === 'Cores';
    const renderCaseExists = !!renderCase;

    if (renderCaseExists) {
      if (optionColorsIsSelected) {
        src = await convertSvgToPng('svg');
      } else {
        src = renderCase.props.src;
      }
      const { produto }: ApiResponse = (await api.get(`produtos/${id}`)).data;

      dispatch(
        addProductToCartRequest({ ...produto, Imagem_URL: src, _id: uuid() })
      );

      history.push('/cart');
    }
  };

  return {
    handleSelectColor,
    handleSelectRenderCase,
    handleAddToCart,
    selectedColor,
    setMenuOption,
    menuContent,
    menuOption,
    id,
    renderCase,
  };
};
