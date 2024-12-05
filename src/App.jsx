import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trucks from "./pages/Trucks";
import Drivers from "./pages/Drivers";
import RegisterDriver from "./pages/RegisterDriver";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./GlobalStyle";

const App = () => (
  
    <div>
     
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/register-driver" element={<RegisterDriver />} />
        </Routes>
        <Footer />
        </ThemeProvider>

    </div>
);

export default App;