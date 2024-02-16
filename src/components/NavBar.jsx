import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <h1>Melucia</h1>
      </div>
    <nav>
    <NavLink to="/">Home</NavLink>
    <span>| |</span>
    <NavLink to="/places">Places</NavLink>
   <span>| |</span>
    <NavLink to="/about">About</NavLink>
    <span>| |</span>
    <NavLink to="/randomplace"> Get a random Place</NavLink>
    </nav>
    </>
  );
}

export default NavBar;
