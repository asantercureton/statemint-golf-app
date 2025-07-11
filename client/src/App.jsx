import './App.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Weather from './components/Weather';
import BadgeCard from './components/BadgeCard';
import FloatingButton from './components/FloatingButton';

function App() {

  return (
    <Router>
      <Navbar />
      <FloatingButton />
      {/* <div className='flex flex-row bg-gray-100 overflow-x-none w-screen p-6'>
        <BadgeCard badges={{
          name: "Golf Pro",
          description: "Awarded for completing 100 rounds of golf.",
          date: "2023-10-01",
          image: "https://example.com/golf-pro-badge.png"
        }} />
        <BadgeCard badges={{
          name: "Golf Pro",
          description: "Awarded for completing 100 rounds of golf.",
          date: "2023-10-01",
          image: "https://example.com/golf-pro-badge.png"
        }} />
        <BadgeCard badges={{
          name: "Golf Pro",
          description: "Awarded for completing 100 rounds of golf.",
          date: "2023-10-01",
          image: "https://example.com/golf-pro-badge.png"
        }} />
      </div> */}
      <Dashboard />
      <Weather />
      <Footer />
    </Router>
  )
}

export default App
