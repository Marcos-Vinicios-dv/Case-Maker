import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { BiFilter } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import { Filtros } from '..';
import { ContainerFilter } from './styles';

export const ResponsiveFilter = () => {
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
      } else if (window.scrollY < 320 || window.scrollY > 1800) {
        setIsVisible(false);
      }
    } else {
      if (window.scrollY > 320 && window.scrollY < 1000) {
        setIsVisible(true);
      } else if (window.scrollY < 320 || window.scrollY > 1000) {
        setIsVisible(false);
      }
    }
  }, []);

  if (isVisible) {
    return (
      <ContainerFilter
        isOpen={isResponsiveFilterOpen}
        onClick={() => setIsResponsiveFilterOpen(!isResponsiveFilterOpen)}
      >
        <div>
          {!isResponsiveFilterOpen ? (
            <BiFilter />
          ) : (
            <>
              <Filtros />
              <button
                type="button"
                onClick={() => setIsResponsiveFilterOpen(false)}
              >
                <IoClose />
              </button>
            </>
          )}
        </div>
      </ContainerFilter>
    );
  } else {
    return <></>;
  }
};
