import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const ScrollToTopLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
};

export default ScrollToTopLayout;
