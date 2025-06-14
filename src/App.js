import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/checknav';
import Footer from './components/Footer';
import ContactUsForm from './components/ContactUsForm';
import Solution from './components/Solutions/Solutions';
import CentralizedCatalogue from './components/Solutions/CentralizedCatalogue';
import Wallet from './components/Wallet/Wallet'; // Add this import
import AdminRoutes from './routes/AdminRoutes';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUsForm />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/solutions/centralized-catalogue" element={<CentralizedCatalogue />} />
        <Route path="/wallet" element={<Wallet />} /> {/* Add this route */}
        <Route path="/auth/*" element={<AdminRoutes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;