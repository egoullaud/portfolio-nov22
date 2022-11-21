
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';


function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path="/home" element={<Home/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
