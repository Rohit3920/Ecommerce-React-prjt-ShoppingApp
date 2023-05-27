import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import NavBar from './Component/NavBar';
import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
