import { NavLink } from "react-router-dom";
import Logo from "../assets/melucia-logo.png";

function NavBar() {
  return (
    <>
      <div className="flex bg-gradient-to-b from-green-200 to-green-50 top-0 gap-2 justify-between w-full lg:gap-2">
        <div className="flex items-center self-start">
          <img className="w-24 lg:w-48" src={Logo} atl="logo" />
        </div>
        <nav className="h-12 flex  pr-1 lg:h-16 lg:pr-8 ">
          <div className="flex justify-end items-center gap-1 lg:gap-10 ">
            <NavLink
              className="cursor-pointer text-xs   lg:text-xl font-bold  hover:text-blue-800 hover:underline"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="cursor-pointer text-xs   lg:text-xl font-bold hover:text-blue-800 hover:underline"
              to="/places"
            >
              Destinations
            </NavLink>
            <NavLink
              className="cursor-pointer text-xs   lg:text-xl font-bold hover:text-blue-800 hover:underline"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="cursor-pointer text-xs   lg:text-xl font-bold hover:text-blue-800 hover:underline"
              to="/randomplace"
            >
              {" "}
              Random
            </NavLink>
          </div>
        </nav>
      </div>
      <h1 className="text-center text-xl   lg:text-4xl font-bold mb-8 mt-6">
        Discover your Wanderlust
      </h1>
    </>
  );
}

export default NavBar;
