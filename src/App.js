import './App.css'
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Checkout from './Checkout'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route component={Error} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
