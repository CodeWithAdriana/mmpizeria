import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Detalle from "./views/Detalle";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PizzaProvider from "./context/PizzaContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <PizzaProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas/:id" element={<Detalle />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </PizzaProvider>
  );
}

export default App;
