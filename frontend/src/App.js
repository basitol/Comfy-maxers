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
  UserEditPage,
  ProductListPage,
  ProductEditPage,
  Product,
  OrderListPage,
  LandingPage,
} from "./pages";

import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-full">
        <Routes>
          <Route index path="/" element={<Homepage />}></Route>
          <Route path="/landing" element={<LandingPage />}></Route>
        </Routes>
      </div>
      <Container>
        <Routes>
          <Route path="/page/:pageNumber" element={<Homepage />}></Route>
          <Route
            path="/search/:keyword/page/:pageNumber"
            element={<Homepage />}
          ></Route>
          <Route path="/search/:keyword" element={<Homepage />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/shipping" element={<ShippingPage />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
          <Route path="/order/:id" element={<OrderPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/admin/userlist" element={<UserListPage />}></Route>
          <Route path="/admin/orderlist" element={<OrderListPage />}></Route>
          <Route path="/admin/users/:id" element={<UserEditPage />}></Route>
          <Route
            path="/admin/product/:id/edit"
            element={<ProductEditPage />}
          ></Route>
          <Route
            path="/admin/productlist"
            element={<ProductListPage />}
          ></Route>
          <Route
            path="/admin/productlist/:pageNumber"
            element={<ProductListPage />}
          ></Route>
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
