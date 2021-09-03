// import api from '../../services/api';
// import { useDispatch } from 'react-redux';

import { CardProduct } from '../../components/Cards/CardProductList';
import { Filtros } from '../../components/Filtro';
import { ResponsiveFilter } from '../../components/Filtro/ResponsiveFilter';
import { Container, ContentBox, ListaDeProdutos } from './styles';

// import * as CarrinhoActions from '../../store/modules/carrinho/actions';
// import { formatPrice } from '../../util/format';

const Presets = () => {
  // const { getProducts } = useApi();

  // const [produtos, setProdutos] = useState([]);
  // const [range, setRange] = useState(100);
  // const input = document.getElementById('preco');
  // const dispatch = useDispatch();

  // function addCarrinho(id) {
  //   dispatch(CarrinhoActions.solicitarAddAoCarrinho(id));
  // }

  // function setPreco() {
  //   setRange(input.value);
  // }

  return (
    <Container>
      <h1>Presets</h1>
      <p>Ou escolha entre algumas opções preparadas por nós.</p>

      <ContentBox>
        <Filtros />
        <ResponsiveFilter />
        <ListaDeProdutos>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ListaDeProdutos>
      </ContentBox>
    </Container>
  );
};

export default Presets;
