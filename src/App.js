
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <NavBar/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
