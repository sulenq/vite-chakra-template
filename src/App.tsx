import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MissingPage from "./pages/MissingPage";
import { globalTheme } from "./theme/globalTheme";
import ServicePage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import FaqsPage from "./pages/FaqsPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <ChakraProvider theme={globalTheme}>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<FaqsPage />} />

          <Route path="*" element={<MissingPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
