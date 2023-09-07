import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact';
import Mappart from './components/MapContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='w-full h-screen flex flex-col bg-[#042f2e] box-border text-white'>
      <Navbar/>
      <div className="w-full h-[calc(100%-4rem)] ">
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/map" element={<Mappart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
