// File: src/components/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi pathname (route) change hoga, ye window ko top pe scroll kar dega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}