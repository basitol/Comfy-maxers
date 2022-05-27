import { Header, Footer } from "./components";
import { Homepage, ProductPage } from "./pages";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route index path="/" element={<Homepage />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
