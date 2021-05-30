import styled from 'styled-components';
import { Form as Unform } from '@unform/web'
import { darken } from 'polished'


export const Form = styled(Unform)`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

animation: fadeInBack .6s cubic-bezier(.39,.575,.565,1.000) 1s both;

h1 {
  font-size: 2rem;
  padding-bottom: 30px;
}

button {
   color: #d1d1d1;
   font-size: 1.2rem;
   font-weight: bold;
   background: rgba(0, 209, 114, 0.81);

   border: 0;

   width: 200px;
   height: 50px;

   margin-top: 30px;
 }

 strong {
   margin-top: 30px;
   position: relative;
   right: 85px;

  color: ${darken(0.05, '#6B727A')};
  font-weight: 300;
 }

div {
   width: 350px;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-evenly;

   border-radius: 4px;

   background: rgba(196, 196, 196, 0.09);

   & + div {
     margin-top: 30px;
   }

   input {
     width: 80%;
     height: 50%;
     font-size: 1.3rem;
     color: #d1d1d1;

     background: none;
     border: 0;

     &::placeholder {
       color: rgba(209, 209, 209, 0.29);
     }
   }
 }

 label {
  position: relative;
  right: 85px;

  color: #05C46D;
  font-weight: 300;
  margin: 8px auto;
 } 

  @keyframes fadeInBack {
    from{
    transform:translateZ(80px);
    opacity:0
    }
    to{
      transform:translateZ(0);
      opacity:1
    }
  }
`;
