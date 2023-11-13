import { useState, useEffect } from 'react';

const getOrientation = () => window.screen.orientation.type;

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  const updateOrientation = () => {
    const currentOrientation = getOrientation();
    console.log(currentOrientation);
    setOrientation(currentOrientation);
    if (currentOrientation.startsWith('landscape')) {
      console.log(window.innerHeight);
      document.documentElement.style.setProperty(
        '--logo-width',
        `${window.innerHeight / 2}px`
      );
    } else {
      document.documentElement.style.setProperty('--logo-width', `25rem`);
    }
  };

  useEffect(() => {
    updateOrientation();
    window.addEventListener('orientationchange', updateOrientation);
    return () => {
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return orientation;
};

export default useScreenOrientation;
