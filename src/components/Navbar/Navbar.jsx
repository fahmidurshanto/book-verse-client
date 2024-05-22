import { SiBookstack } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinks = (
    <div className="lg:flex">
      {/* Home, Add Book, All Books, Borrowed
Books, and Login */}
      <li className="list-none font-semibold mx-3 p-3">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="list-none font-semibold mx-3 p-3">
        <NavLink to="/addBook">Add Book</NavLink>
      </li>
      <li className="list-none font-semibold mx-3 p-3">
        <NavLink to="/allBooks">All Books</NavLink>
      </li>
      <li className="list-none font-semibold mx-3 p-3">
        <NavLink to="/borrowedBooks">Borrowed Books</NavLink>
      </li>
      <li className="list-none font-semibold mx-3 p-3">
        <NavLink to="/login">Login</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar text-white bg-indigo-800 flex justify-between shadow-xl">
      {/* Dropdown  for mobile devices navbar */}
      <details className="dropdown lg:hidden shadow-lg">
        <summary className="m-1 btn">
          <RiArrowDropDownLine className="text-3xl" />
        </summary>
        <div className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 text-black">
          {navLinks}
        </div>
      </details>
      {/* Website Logo */}
      <Link to="/" className="btn btn-ghost text-xl font-bold ">
        <SiBookstack /> Book Verse
      </Link>
      {/* Navlinks */}
      <div className="hidden lg:block">{navLinks}</div>
      {/* user information */}
      <div className=" flex-col items-end">
        <CgProfile className="text-4xl font-bold" />
        <p>User Name</p>
      </div>
    </div>
  );
};

export default Navbar;
