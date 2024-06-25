import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { usePizzaContext } from "../../context/PizzaContext";

const Navbar = () => {
  const setActiveClass = ({ isActive }) =>
    isActive ? "cart-link active" : "cart-link";

  const { carrito } = usePizzaContext();

  return (
    <nav>
      <div className="brand">
        <NavLink to="/" className="logo mx-1 mb-0">
          <h4 className="mb-0 fst-italic">&#127829; Pizzería Mamma Mia!</h4>
        </NavLink>
      </div>
      <div className="right-side">
        <NavLink to="/carrito" className={setActiveClass}>
          {carrito.items.length ? (
            <HiShoppingCart color="white" size="1.15em" aria-hidden="true" />
          ) : (
            <HiOutlineShoppingCart
              color="white"
              size="1.15em"
              aria-hidden="true"
            />
          )}
          <span className="visually-hidden">Ir al carrito</span>
        </NavLink>
        <div className="badge">
          <p
            className="h5"
            aria-label={`Llevas ${carrito.cantidadPizzas} pizzas en tu carrito`}
          >
            {carrito.cantidadPizzas}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
