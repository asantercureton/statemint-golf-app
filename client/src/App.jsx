import './App.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Weather from './components/Weather';

function App() {

  return (
    <Router>
        <Navbar />
        <Dashboard />
        <Weather />
        <Footer />
    </Router>
  )
}

export default App
