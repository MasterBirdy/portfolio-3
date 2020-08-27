import { useState, useEffect } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      if (isMobile && window.innerWidth > 768) {
        setIsMobile(false);
      } else if (!isMobile && window.innerWidth <= 768) {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return isMobile;
}
