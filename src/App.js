import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/checknav';
import Footer from './components/Footer';
import ContactUsForm from './components/ContactUsForm';
import Solution from './components/Solutions/Solutions';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUsForm />} />
        <Route path="/solutions" element={<Solution />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;