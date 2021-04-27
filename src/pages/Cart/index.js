import React from 'react';

import { 
  MdRemoveCircleOutline, 
  MdAddCircleOutline, 
  MdDelete } from 'react-icons/md';
import Wrench from '../../assets/images/Wrench.svg'
// import Return from '../../assets/images/Return.svg';
import Pc from '../../assets/images/Pc.svg';
import Frete from '../../assets/images/Frete.svg';

import { Container, ProductTable, FreteList, Total, Barra } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable  cellSpacing="0px">
        <caption>CARRINHO DE COMPRAS</caption>
        <thead>
          <th/>
          <th>PRODUTOS</th>
          <th>QTD</th>
          <th>VALOR</th>
          <th/>
        </thead>
        <tbody>
          <tr>
            <td>
              <button type="button">
                <img src={Wrench} alt="Customizar"/>
              </button>
              <img src={Pc} alt="Pc"/>
            </td>
            <td>
              <strong>GABINETE THERMALTAKE H200</strong>
              <small>Em estoque</small>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#00D127"/>
                </button>
                <input type="number" value="1"/>
                <button type="button">
                  <MdAddCircleOutline size={20} color="#00D127"/>
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 3 500,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#00D127"/>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button">
                <img src={Wrench} alt="Customizar"/>
              </button>
              <img src={Pc} alt="Pc"/>
            </td>
            <td>
              <strong>GABINETE THERMALTAKE H200</strong>
              <small>Em estoque</small>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#00D127"/>
                </button>
                <input type="number" value="1"/>
                <button type="button">
                  <MdAddCircleOutline size={20} color="#00D127"/>
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 3 500,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#00D127"/>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button">
                <img src={Wrench} alt="Customizar"/>
              </button>
              <img src={Pc} alt="Pc"/>
            </td>
            <td>
              <strong>GABINETE THERMALTAKE H200</strong>
              <small>Em estoque</small>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#00D127"/>
                </button>
                <input type="number" value="1"/>
                <button type="button">
                  <MdAddCircleOutline size={20} color="#00D127"/>
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 3 500,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#00D127"/>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      
      {/* <Barra/> */}

      <FreteList>
        <span><img src={Frete} alt=""/>FRETE</span>
      </FreteList>
      
      <Total>
        <h1>TOTAL</h1>
        <div>
          <p>FRETE GRÁTIS</p>
          <Barra/>
          <strong>R$ 3 500,00</strong>
        </div>        
        <button type="button">FINALIZAR COMPRA</button>
      </Total>
    </Container>
  );
}

export default Cart;