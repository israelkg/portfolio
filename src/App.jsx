import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';


function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col min-h-screen transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
