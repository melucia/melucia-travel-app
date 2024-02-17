import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="nav">

        <img src="/src/assets/melucia-logo.png" alt="logo" />

        <h1>Melucia - Discover your Wanderlust</h1>
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
