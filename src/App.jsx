import { Routes, Route } from 'react-router-dom';
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="bg-slate-900 text-slate-100">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;