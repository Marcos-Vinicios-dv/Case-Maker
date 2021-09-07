import { useState, useEffect } from 'react';

import { isMobile } from 'react-device-detect';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';

import 'swiper/swiper-bundle.css';

import verify from '../../assets/images/Verify.svg';
import api from '../../services/api';
import { SliderItemContainer, CarouselContainer } from './styles';

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

interface Product {
  Imagem_URL: string;
  disponibilidade: boolean;
  marca: string;
  preco: number;
  titulo: string;
  _id: string;
  preco_formatado: string;
  tipo: string;
}

interface SliderProps {
  selectedCaseId: string;
  onSelectedCaseId: (caseId: string) => void;
}

export const Slider = ({ onSelectedCaseId, selectedCaseId }: SliderProps) => {
  const [customCases, setCustomCases] = useState<Product[]>([]);

  useEffect(() => {
    async function loadCustoms() {
      const response = (await api.get('categorias/Customizado')).data;

      setCustomCases(response.categoria.produtos);
    }
    loadCustoms();
  }, []);

  return (
    <CarouselContainer>
      <Swiper
        pagination={{ clickable: true }}
        effect={'fade'}
        direction={isMobile ? 'horizontal' : 'vertical'}
        fadeEffect={{ crossFade: true }}
      >
        {customCases.map((product) => (
          <SwiperSlide key={product._id}>
            <SliderItemContainer>
              <img
                src={product.Imagem_URL}
                alt={product.titulo}
                onClick={() => onSelectedCaseId(product._id)}
              />

              {selectedCaseId === product._id && (
                <div>
                  <img src={verify} alt="selecionado" />
                </div>
              )}
            </SliderItemContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
