import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FaqsPage from "./pages/FaqsPage";
import LandingPage from "./pages/LandingPage";
import MissingPage from "./pages/MissingPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicePage from "./pages/ServicesPage";
// @ts-ignore
import { globalTheme } from "./theme/globalTheme";

const App = () => {
  return (
    <ChakraProvider theme={globalTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageContainer>
                <LandingPage />
              </PageContainer>
            }
          />
          <Route
            path="/services"
            element={
              <PageContainer>
                <ServicePage />
              </PageContainer>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageContainer>
                <PortfolioPage />
              </PageContainer>
            }
          />
          <Route
            path="/about"
            element={
              <PageContainer>
                <AboutPage />
              </PageContainer>
            }
          />
          <Route
            path="/faqs"
            element={
              <PageContainer>
                <FaqsPage />
              </PageContainer>
            }
          />
          <Route
            path="/contact"
            element={
              <PageContainer>
                <ContactPage />
              </PageContainer>
            }
          />

          <Route path="*" element={<MissingPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
