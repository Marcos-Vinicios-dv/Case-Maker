import { ReactNode } from 'react';
import { MenuContentState } from '../../services/hooks/useCustom';

interface RenderOptionInMenuProps {
  option: string;
  menuContent: MenuContentState;
  onSelectColor: (color: string) => void;
  onSelectCase: (render: ReactNode) => void;
}

export const RenderOptionInMenu = ({
  option,
  menuContent,
  onSelectCase,
  onSelectColor,
}: RenderOptionInMenuProps) => {
  switch (option) {
    case 'Cores':
      return (
        <ul>
          {menuContent.colors.map((color) => (
            <li
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => onSelectColor(color)}
            ></li>
          ))}
        </ul>
      );

    case 'Skins':
      return (
        <ul>
          {menuContent.skins.map((skin) => (
            <li
              key={skin.nome}
              onClick={() =>
                onSelectCase(<img src={skin.skinAplicada} alt={skin.nome} />)
              }
            >
              <img src={skin.skin} alt={skin.nome} />
            </li>
          ))}
        </ul>
      );

    case 'Leds':
      return (
        <ul>
          {menuContent.leds.map((led) => (
            <li
              key={led.cor}
              style={{ backgroundColor: led.cor }}
              onClick={() =>
                onSelectCase(<img src={led.corAplicada} alt={led.cor} />)
              }
            ></li>
          ))}
        </ul>
      );

    default:
      return <>{option}</>;
  }
};
