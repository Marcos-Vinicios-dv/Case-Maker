import styled from 'styled-components';
import { Form as Unform } from '@unform/web'

export const Form = styled(Unform)`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 0.5fr 3fr .5fr;
place-items: center;
place-content: center;

h1 {
  font-size: 2rem;
}

button {
   color: #d1d1d1;
   font-size: 1.2rem;
   font-weight: bold;
   background: rgba(0, 209, 114, 0.71);

   border: 0;

   width: 200px;
   height: 50px;
 }

`;

export const InputSection = styled.div`
width: 100%;
height: 100%;
display: grid;
/* place-items: center; */
/* padding:0px 50px; */

overflow-y: scroll;

::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: none;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: none;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgba(196, 196, 196, 0.3);
}

  div {
  align-self: center;
  justify-self: center;
   width: 350px;
   height: 50px;
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
  color: #05C46D;
  font-weight: 300;
  margin: 8px 60px;
 }  
`;
