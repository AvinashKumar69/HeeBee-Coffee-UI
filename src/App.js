import { Route, Routes } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import OrderMenu from './pages/OrderMenu';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/ordermenu' element={<OrderMenu />} />
        <Route exact path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
