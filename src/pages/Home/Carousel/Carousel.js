import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel';
import produce from 'immer';
import { useDispatch } from 'react-redux';

import Verify from '../../../assets/images/Verify.svg';
import { MyDot } from './Elements';
import {Container} from './styled';
import { selecionarGabinete } from '../../../store/modules/customizar/actions';


export default function PCCarousel() {
  const [gabinetes, setGabinetes] = useState([
    {
      id: 0,
      imagem: "https://www.imagemhost.com.br/images/2021/05/13/Thermaltake-H200.png",
      isSelected: false,
    },
    {
      id: 1,
      imagem: "https://www.imagemhost.com.br/images/2021/05/13/Thermaltake-H200.png",
      isSelected: false,
    },
    {
      id: 2,
      imagem: "https://www.imagemhost.com.br/images/2021/05/13/Thermaltake-H200.png",
      isSelected: false,
    }
  ]); 
  const [select, setSelect] = useState();

  const Dispatch = useDispatch();
  // FAZER REQUISIÇÃO DA API PARA ALIMENTAR A LISTA DE GABINETES CUSTOMIZÁVEIS
  
  function selectItem(id) {
    const selectedGabinete = produce(gabinetes, draft => {
      draft.forEach(gabinete => {
        if(gabinete.id === id){
          gabinete.isSelected = true;
        } else {
          gabinete.isSelected = false;
        }  
      });
    });
    setSelect(gabinetes[id]);
    setGabinetes(selectedGabinete);
  }

  useEffect(() => {
    if (select !== undefined) {
      Dispatch(selecionarGabinete(select))
    }       
  }, [Dispatch, select])
// f2 e clique para alterar tudo
  return (
    <>    
      <Carousel 
        dot={MyDot} 
        cols={1} 
        rows={1} 
        gap={100} 
        loop 
        hideArrow={true}
        showDots={true}
      >
       {gabinetes.map((gabinete, i) => (
         <Carousel.Item key={i}>
           <Container onClick={() => selectItem(gabinete.id)}>
             {gabinete.isSelected ? <div><img src={Verify} alt="Selecionado"/></div> : null}
             <img  width="70%" src={gabinete.imagem} alt="pc"/>
           </Container>
         </Carousel.Item>
       ))}
      </Carousel>
    </>
  )
}
