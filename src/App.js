
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import{Routes,Route} from 'react-router-dom'
import Products from './Component/Products';
import ProductDetail from './Component/ProductDetail';
function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/products" Component={Products}/>
    <Route path="/products/:id" Component={ProductDetail}/>
  
  
  </Routes>
  
 
  </>
  );
}

export default App;
