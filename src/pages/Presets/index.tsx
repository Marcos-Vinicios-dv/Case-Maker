import ClipLoader from 'react-spinners/ClipLoader';

import { CardProduct } from '../../components/Cards/CardProductList';
import { Filtros } from '../../components/Filtro';
import { ResponsiveFilter } from '../../components/Filtro/ResponsiveFilter';
import { usePresets } from '../../services/hooks/usePresets';
import { Container, ContentBox, ListaDeProdutos } from './styles';

const Presets = () => {
  const {
    productList,
    setProductList,
    getDefaultProducts,
    isLoading,
    setIsLoading,
  } = usePresets();

  return (
    <Container>
      <h1>Presets</h1>
      <p>Ou escolha entre algumas opções preparadas por nós.</p>

      <ContentBox>
        <Filtros
          onSetList={setProductList}
          getDefaultProducts={getDefaultProducts}
          onSetLoading={setIsLoading}
        />
        <ResponsiveFilter>
          <Filtros
            onSetList={setProductList}
            getDefaultProducts={getDefaultProducts}
            onSetLoading={setIsLoading}
          />
        </ResponsiveFilter>
        {isLoading ? (
          <ClipLoader color="#00d172" loading size={30} />
        ) : (
          <ListaDeProdutos>
            {productList.map((product) => (
              <CardProduct key={product._id} product={product} />
            ))}
          </ListaDeProdutos>
        )}
      </ContentBox>
    </Container>
  );
};

export default Presets;
