import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalState from "./context/GlobalState";
import "./App.scss";
import MainPage from "./pages/main/Main.page";
import CommentsPage from "./pages/comments/Comments.page";
import RegistrationPage from "./pages/registration/Registration.page";
import ProductsPage from "./pages/products/Products.page";
import Product1Page from "./pages/Product1.page";
import Product2Page from "./pages/Product2.page";
import Product3Page from "./pages/Product3.page";
import Product4Page from "./pages/Product4.page";
import Product5Page from "./pages/Product5.page";
import Product6Page from "./pages/Product6.page";
import Product7Page from "./pages/Product7.page";
import Product8Page from "./pages/Product8.page";
import Product9Page from "./pages/Product9.page";
import SidebarMenu from "./components/sidebarMenu/SidebarMenu";
import SidebarCart from "./components/sidebarCart/SidebarCart";
import CartSmPage from "./pages/cartSm/CartSm.page";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <GlobalState>
        <Router>
          <div className="app">
            <SidebarMenu />
            <div className="central">
              <Header />
              <div className="central__content">
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="comments" element={<CommentsPage />} />
                  <Route path="registration" element={<RegistrationPage />} />
                  <Route path="sets" element={<ProductsPage />} />
                  <Route path="salomon" element={<Product1Page />} />
                  <Route path="5philadelph" element={<Product2Page />} />
                  <Route
                    path="philadelh-and-salmon"
                    element={<Product3Page />}
                  />
                  <Route path="6philadelph" element={<Product4Page />} />
                  <Route path="top-set" element={<Product5Page />} />
                  <Route path="kamikadze" element={<Product6Page />} />
                  <Route path="4philadelph" element={<Product7Page />} />
                  <Route path="love-philadelph" element={<Product8Page />} />
                  <Route path="yakudza" element={<Product9Page />} />
                  <Route path="cartMS" element={<CartSmPage />} />
                </Routes>
              </div>
              <Footer />
            </div>
            <SidebarCart />
          </div>
        </Router>
      </GlobalState>
    </>
  );
};

export default App;
