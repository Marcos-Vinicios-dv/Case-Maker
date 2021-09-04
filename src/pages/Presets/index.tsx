import { CardProduct } from '../../components/Cards/CardProductList';
import { Filtros } from '../../components/Filtro';
import { ResponsiveFilter } from '../../components/Filtro/ResponsiveFilter';
import { usePresets } from '../../services/hooks/usePresets';
import { Container, ContentBox, ListaDeProdutos } from './styles';

const Presets = () => {
  const { productList, setProductList, getDefaultProducts } = usePresets();

  // const [produtos, setProdutos] = useState([]);
  // const [range, setRange] = useState(100);
  // const input = document.getElementById('preco');

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
        <Filtros
          onSetList={setProductList}
          getDefaultProducts={getDefaultProducts}
        />
        <ResponsiveFilter>
          <Filtros
            onSetList={setProductList}
            getDefaultProducts={getDefaultProducts}
          />
        </ResponsiveFilter>
        <ListaDeProdutos>
          {productList.map((product) => (
            <CardProduct key={product._id} product={product} />
          ))}
        </ListaDeProdutos>
      </ContentBox>
    </Container>
  );
};

export default Presets;
