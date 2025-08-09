import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PlayerProfile from './pages/PlayerProfile.jsx'
import Scorecard from './components/Scorecard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import CreateTeeTime from './pages/CreateTeeTime.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// define router
const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/profile", element: <PlayerProfile /> },
  { path: "/scorecard", element: <Scorecard scorecard={[
    { holeNumber: 1, par: 4, score: 4 },
    { holeNumber: 2, par: 3, score: 2 },
    { holeNumber: 3, par: 5, score: 6 },
    { holeNumber: 4, par: 4, score: 3 },
    { holeNumber: 5, par: 4, score: 5 },
    { holeNumber: 6, par: 3, score: 3 },
    { holeNumber: 7, par: 5, score: 4 },
    { holeNumber: 8, par: 4, score: 4 },
    { holeNumber: 9, par: 3, score: 2 },
    { holeNumber: 10, par: 4, score: 4 },
    { holeNumber: 11, par: 3, score: 2 },
    { holeNumber: 12, par: 5, score: 6 },
    { holeNumber: 13, par: 4, score: 3 },
    { holeNumber: 14, par: 4, score: 5 },
    { holeNumber: 15, par: 3, score: 3 },
    { holeNumber: 16, par: 5, score: 4 },
    { holeNumber: 17, par: 4, score: 4 },
    { holeNumber: 18, par: 3, score: 2 },
  ]} player={[{name: 'Saint Embargo', coursePar: 72, score: 87}]} /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/create-teetime", element: <CreateTeeTime /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
    <Footer></Footer>
  </StrictMode>,
)
