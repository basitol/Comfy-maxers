import { Header, Footer } from "./components";
import {
  Homepage,
  ProductPage,
  CartPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  ShippingPage,
  PaymentPage,
  PlaceOrder,
  OrderPage,
  UserListPage,
} from "./pages";

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
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/shipping" element={<ShippingPage />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
          <Route path="/order/:id" element={<OrderPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/admin/userlist" element={<UserListPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/cart">
            <Route path=":id" element={<CartPage />} />
            <Route path="" element={<CartPage />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
