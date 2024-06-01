import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import MissingPage from "./pages/MissingPage";
import { globalTheme } from "./theme/globalTheme";

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
          <Route path="/" element={<Landing />} />

          <Route path="*" element={<MissingPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
