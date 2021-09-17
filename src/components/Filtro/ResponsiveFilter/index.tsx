import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { BiFilter } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import { ContainerFilter } from './styles';

interface ResponsiveFilterProps {
  children: ReactNode;
}

export const ResponsiveFilter = ({ children }: ResponsiveFilterProps) => {
  const [isResponsiveFilterOpen, setIsResponsiveFilterOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = useCallback(() => {
    if (window.innerWidth < 600) {
      if (window.scrollY > 320 && window.scrollY < 1800) {
        setIsVisible(true);
      } else if (window.scrollY < 320) {
        setIsVisible(false);
      }
    } else {
      if (window.scrollY > 320 && window.scrollY < 1000) {
        setIsVisible(true);
      } else if (window.scrollY < 320) {
        setIsVisible(false);
      }
    }
  }, []);

  return (
    <ContainerFilter isOpen={isResponsiveFilterOpen} isVisible={isVisible}>
      <div>
        {children}
        {!isResponsiveFilterOpen ? (
          <BiFilter onClick={() => setIsResponsiveFilterOpen(true)} />
        ) : (
          <button type="button">
            <IoClose onClick={() => setIsResponsiveFilterOpen(false)} />
          </button>
        )}
      </div>
    </ContainerFilter>
  );
};
