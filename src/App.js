import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';
import Home from './Component/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/product' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
