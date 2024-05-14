import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./constants/header/Header";
import Footer from "./constants/footer/Footer";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Login from "./pages/login/Login";
import Signup from "./pages/reviews/Signup";
import About from "./pages/about/About";
import Reviews from "./pages/reviews/Reviews";
import Contact from "./pages/contact/Contact";
import NoPage from "./pages/nopage/NoPage";
import { Box, Container } from "@material-ui/core";
import Services from "./pages/services/Services";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Box className="main" component={"div"}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Routes>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
