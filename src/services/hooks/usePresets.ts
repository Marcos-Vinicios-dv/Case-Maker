import {
  useCallback,
  useEffect,
  useState,
} from 'hoist-non-react-statics/node_modules/@types/react';
import api from './useApi';

interface Product {}

const formatProduct = () => {};

export const usePresets = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = (await api.get('categorias/Padrao')).data;
      // formatProduct()
    }
    loadProducts();
  }, []);

  const getDefaultProducts = useCallback(async () => {
    const response = api.get('categorias/Padrao');

    return (await response).data;
  }, []);

  return {
    getDefaultProducts,
  };
};
