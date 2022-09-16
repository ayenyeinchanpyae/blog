import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../store";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuItems from "./MenuItems";
const Header = () => {
  const [active, setActive] = useState(false);
  const isLoggedIn = localStorage.getItem("userId");
  const showMenu = () => {
    setActive(!active);
  };

  const dispatch = useDispatch();
  console.log("header", isLoggedIn);
  const logout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
  };
  return (
    <>
      <div className="fixed w-full h-[60px]  text-cyan-600 flex justify-between p-4 items-center">
        <div className="text-2xl ml-[100px] font-bold text-center uppercase">
          <Link to="/">Crafter</Link>
        </div>

        <nav>
          <div className="absolute right-6 md:hidden top-6 scale-150">
            <GiHamburgerMenu
              onClick={showMenu}
              className="scale-150 cursor-pointer"
            />
          </div>

          <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
            <li className="hover:underline">
              <Link to="/blogs">All Blogs</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="hover:underline">
                  <Link to="/myBlogs">My Blogs</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/blogs/add">Add</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/login">
                    <button className="mr-[100px]" onClick={logout}>
                      Log Out
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:underline">
                  <Link to="/login">Log In</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/signup" className="mr-[100px]">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>

          <MenuItems showMenu={showMenu} active={active} logout={logout} />
        </nav>
      </div>
    </>
  );
};

export default Header;
