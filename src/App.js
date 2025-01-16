
import './App.css';
// import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import ResearchAndDev from './components/pages/ResearchAndDev';
import About from './components/pages/About';
import Navbar2 from './components/Navbar2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar ';


function App() {
  return (
   <>
      <Router>
      {/* <Navbar/> */}
      <TopNavbar/>
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
 
        <Route path="/research" element={<ResearchAndDev />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
   
   
   </>
  );
}

export default App;
