import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './index.css';
import OrderMenu from './pages/OrderMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <NavBar />
      {/* <Header /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/ordermenu' element={<OrderMenu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
