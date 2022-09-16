import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const MenuItems = ({ showMenu, active, logout }) => {
  const isLoggedIn = localStorage.getItem("userId");
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/60 text-white backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <AiOutlineClose onClick={showMenu} className="cursor-pointer" />
      {/* <li>
        <Link to="/">Home</Link>
      </li> */}
      {isLoggedIn ? (
        <>
          <li className="hover:underline">
            <Link to="/myBlogs" onClick={showMenu}>
              My Blogs
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="/blogs/add" onClick={showMenu}>
              Add
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="/login">
              <button onClick={logout && showMenu}>Logout</button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="hover:underline">
            <Link to="/login" onClick={showMenu}>
              Log In
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="/signup" onClick={showMenu}>
              Sign Up
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default MenuItems;
