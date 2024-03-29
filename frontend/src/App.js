import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";

import { Button, Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />

            <Route path="/product/:id" element={<ProductScreen />} />

            <Route path="/cart/:id" element={<CartScreen />} />

            <Route path="/cart/" element={<CartScreen />} />

            <Route path="/login/" element={<LoginScreen />} />

            <Route path="/register/" element={<RegisterScreen />} />

            <Route path="/profile/" element={<ProfileScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
