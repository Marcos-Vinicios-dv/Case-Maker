import { useEffect, useState } from 'react';
import { IoCartSharp } from 'react-icons/io5';
import ReactStars from 'react-rating-stars-component';
import { useParams, useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import api from '../../services/api';
import { Container, InfoContainer, DataSheet, Price } from './styles';
import { formatNumber } from '../../util/format';
import { SessionsDataSheet } from '../../components/SessionsDataSheet';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IState } from '../../store';
import { User } from '../../services/hooks/useUser';
import { toast } from 'react-toastify';

interface Product {
  Imagem_URL: string;
  avaliacoes: string[];
  preco: number;
  titulo: string;
  _id: string;
  descricao: string;
  disponibilidade: boolean;
  marca: string;
  tipo: string;
}

export interface ProductFormatted extends Product {
  avaliacao: number;
  preco_formatado: string;
}

interface ApiProduct {
  produto: Product;
}

interface DataSheetState {
  baias: string[];
  dimensoes: string;
  placa_mae: string[];
  especificacoes: string[];
}

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataSheet, setDataSheet] = useState<DataSheetState>(null);
  const [product, setProduct] = useState<ProductFormatted>(null);
  const user = useSelector<IState, User>((state) => state.user);

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function loadAllInfoProduct() {
      const { data } = await api.get<ApiProduct>(`produtos/${id}`);

      const { data: rating } = await api.get(
        `produtos/${data.produto._id}/avaliacoes`
      );

      const { data: dataSheet } = await api.get<{
        ficha_tecnica: DataSheetState[];
      }>(`ficha/${data.produto._id}`);

      const productFormatted = {
        ...data.produto,
        preco_formatado: formatNumber(data.produto.preco),
        avaliacao: rating.avaliacoes[0]?.pontuacao ?? 0,
      };

      setProduct(productFormatted);
      setDataSheet(dataSheet.ficha_tecnica[0]);
      setIsLoading(false);
    }

    loadAllInfoProduct();
  }, [id]);

  const handleAddProduct = () => {
    if (user.email) {
      dispatch(addProductToCartRequest(product));
      history.push('/cart');
    } else {
      toast.warn('Para adicionar ao carrinho é necessário estar logado');
    }
  };

  const separatePrice = product?.preco_formatado.split(',');

  return (
    <Container>
      {isLoading ? (
        <ClipLoader color="#00d172" loading size={30} />
      ) : (
        <>
          <InfoContainer>
            <div>
              <img src={product.Imagem_URL} alt={product.titulo} />
            </div>
            <div>
              <h1>{product.titulo}</h1>
              <span>{product.descricao}</span>
              <span>
                <div />
                <ReactStars
                  count={5}
                  value={product.avaliacao}
                  size={26}
                  activeColor="#eedc3f"
                  isHalf={true}
                />
                ({product.avaliacoes.length})
              </span>
              <Price>
                R$ <span>{separatePrice[0]}</span>,{separatePrice[1]}
              </Price>
              <button onClick={handleAddProduct}>
                <IoCartSharp />
                Carrinho
              </button>
            </div>
          </InfoContainer>
          <DataSheet>
            <h1>Ficha Técnica</h1>
            <div>
              <SessionsDataSheet
                title="Especificações"
                content={dataSheet.especificacoes}
              />

              <SessionsDataSheet title="Baias" content={dataSheet.baias} />

              <SessionsDataSheet
                title="Placa-Mãe"
                content={dataSheet.placa_mae}
              />
              <ul>
                <h3>Dimensões</h3>
                <li>- {dataSheet.dimensoes}</li>
              </ul>
            </div>

            <span>* Produto não acompanha fans, imagem ilustrativa.</span>
          </DataSheet>
        </>
      )}
    </Container>
  );
};

export default ProductPage;
