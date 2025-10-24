import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer.jsx';


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