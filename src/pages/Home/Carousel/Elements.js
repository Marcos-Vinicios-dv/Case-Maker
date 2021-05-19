
// import Left from '../../assets/images/ArrowLeft.svg';
// import Right from '../../assets/images/ArrowRight.svg';


//  const Arrow = styled.span`
//   position: relative;
// ${props => props.side === 'right' && css`
//   top: 45px;
//   left: 345px;
// `}
// `;

export const MyDot = ({ isActive }) => (
    <span
    style={{
      display: 'inline-block',
      height: isActive ? '15px' : '10px',
      width: isActive ? '15px' : '10px',
      background: isActive ? '#05C46D' : '#d1d1d1',
      opacity: isActive ? '1' : '.5',
      borderRadius: '50%',
      border: isActive ? 'none' : '1px solid #d1d1d1',
      margin: '10px'
    }}
  ></span>  
);

export const arrowLeft = () => (
  // <Arrow side={'left'}>
  //   <img src={Left} alt="" />
  // </Arrow>
  <span/>
);

export const arrowRight = () => (
  // <Arrow side={'right'}>
  //   <img src={Right} alt="" />
  // </Arrow>
  <span/>
)