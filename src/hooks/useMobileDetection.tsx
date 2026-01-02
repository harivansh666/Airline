import { useState, useEffect } from "react";

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobile(); // Check on initial render
    window.addEventListener("resize", checkMobile); // Check on resize

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export default useMobileDetection;
