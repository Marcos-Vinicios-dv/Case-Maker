import { useCallback, useState } from 'react';
import { formatNumber } from '../../util/format';
import api from '../api';

interface Product {
  Imagem_URL: string;
  avaliacoes: string[];
  disponibilidade: boolean;
  marca: string;
  preco: number;
  titulo: string;
  _id: string;
  tipo: string;
}

export interface ProductFormatted extends Product {
  avaliacao: number;
  preco_formatado: string;
}

interface ApiResponse {
  categoria: {
    produtos: Product[];
  };
}

const formatProduct = async (product: Product) => {
  const data = (await api.get(`avaliacoes?produto=${product._id}`)).data;

  return {
    ...product,
    avaliacao: data.avaliacoes[0]?.pontuacao ?? 0,
    preco_formatado: formatNumber(product.preco),
  };
};

export const usePresets = () => {
  const [productList, setProductList] = useState<ProductFormatted[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDefaultProducts = useCallback(async () => {
    const response = (await api.get<ApiResponse>('categorias/Padrao')).data;

    const formattingProducts = await response.categoria.produtos.map(
      formatProduct
    );

    const newProductList: ProductFormatted[] = await Promise.all(
      formattingProducts
    );

    return newProductList;
  }, []);

  return {
    getDefaultProducts,
    productList,
    setProductList,
    isLoading,
    setIsLoading,
  };
};
