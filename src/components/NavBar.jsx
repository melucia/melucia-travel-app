import { NavLink } from "react-router-dom";
import Logo from "../assets/melucia-logo.png";

function NavBar() {
  return (
    <>
      <div className="flex bg-green-100 top-0 justify-end gap-6 lg:justify-between lg:gap-2">
        <div>
          <img className="lg:ml-6 mt-1" src={Logo} atl="logo" />
        </div>
        <nav className="h-16 flex justify-end gap-2 items-center pr-1 lg:justify-evenly  lg:gap-10  lg:pr-8 ">
          <NavLink className="cursor-pointer text-sm   lg:text-xl font-bold  hover:text-blue-800 hover:underline"
            to="/">Home</NavLink>
          <NavLink className="cursor-pointer text-sm   lg:text-xl font-bold hover:text-blue-800 hover:underline"
            to="/places">Destinations</NavLink>
          <NavLink className="cursor-pointer text-sm   lg:text-xl font-bold hover:text-blue-800 hover:underline"
            to="/about">About</NavLink>
          <NavLink className="cursor-pointer text-sm   lg:text-xl font-bold hover:text-blue-800 hover:underline"
            to="/randomplace"> Random Place</NavLink>
        </nav>
      </div>
      <h1 className="text-center text-xl   lg:text-4xl font-bold mb-8 mt-6">Discover your Wanderlust</h1>
    </>
  );
}

export default NavBar;
