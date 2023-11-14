import { useState, useEffect } from 'react';

const getOrientation = () =>
  window?.screen?.orientation?.type ?? 'portrait-primary';

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  const updateOrientation = () => {
    const currentOrientation = getOrientation();
    setOrientation(currentOrientation);
    if (currentOrientation.startsWith('landscape')) {
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
