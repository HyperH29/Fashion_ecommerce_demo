import { useState, useEffect } from 'react';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // This runs only on the client side after mounting
    setIsMobile(window.innerWidth < 768); // assuming 768px is the breakpoint for mobile
  }, []);

  if (isMobile === null) return null; // or a loading spinner

  return (
    <>
      {isMobile ? (
        <MobileView />
      ) : (
        <DesktopView />
      )}
    </>
  );
};

export default HomePage;
