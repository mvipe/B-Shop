import Footer from "./components/Footer";
import Header from "./components/Header";

import {BrowserRouter as Router , Route} from "react-router-dom"
import {Routes } from "react-router"


import {Button,Container} from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


function App() {
  return (
    <Router>
      <Header/>
      <main className="py-5">
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/product/:id' element={<ProductScreen />}  />
        </Routes>
      
      </Container>
   
    
     </main>
     
    
     <Footer />
    </Router>
  );
}

export default App;
