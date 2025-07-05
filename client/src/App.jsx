import './App.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <Router>
        <Navbar />
        <Dashboard />
    </Router>
  )
}

export default App
