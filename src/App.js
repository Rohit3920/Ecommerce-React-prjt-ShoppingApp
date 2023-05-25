import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
