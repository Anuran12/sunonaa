import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import About from './pages/About';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Services" element={<Services/>} />
        <Route exact path="/Blogs" element={<Blogs/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
