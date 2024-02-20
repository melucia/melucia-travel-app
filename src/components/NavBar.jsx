import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="flex bg-green-100 sticky top-0">
        <div>
          <img className="ml-6 mt-1" src="src/assets/melucia-logo.png" atl="logo" />
        </div>
        <nav className="w-screen h-16 flex justify-evenly items-center">
          <NavLink className="cursor-pointer text-sm   lg:text-xl font-bold  hover:text-blue-800 hover:underline"
            to="/">Home</NavLink>
          <NavLink className="cursor-pointer text-sm   lg:text-xl font-bold hover:text-blue-800 hover:underline"
            to="/places">Places</NavLink>
          <NavLink className="cursor-pointer text-sm   lg:text-xl font-bold hover:text-blue-800 hover:underline"
            to="/about">About</NavLink>
          <NavLink className="cursor-pointer text-sm   lg:text-xl font-bold hover:text-blue-800 hover:underline"
            to="/randomplace"> Get a random Place</NavLink>
        </nav>
      </div>
      <h1 className="text-center text-xl   lg:text-4xl font-bold mb-8 mt-6">Discover your Wanderlust</h1>
    </>
  );
}

export default NavBar;
