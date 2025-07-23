import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Weather from './components/Weather';
import BadgeCard from './components/BadgeCard';
import FloatingButton from './components/FloatingButton';
import PlayerProfile from './pages/PlayerProfile';

function App() {

  return (
    <Router>
      <Navbar />
      <Dashboard />
      <FloatingButton />
      {/* <Weather /> */}
      <Footer />
    </Router>
  )
}

export default App
