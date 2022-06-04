import Footer from "./components/Footer";
import Header from "./components/Header";



import {Button,Container} from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";


function App() {
  return (
    <div className="App">
      <Header/>
      <main className="py-5">
      <Container>
        <HomeScreen />
      </Container>
   
    
     </main>
     
    
     <Footer />
    </div>
  );
}

export default App;
