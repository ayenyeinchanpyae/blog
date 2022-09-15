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
      <div className="fixed w-full h-[60px] bg-slate-100 text-cyan-800 flex justify-between p-4 items-center">
        <div className="text-2xl ml-[100px] font-bold text-center uppercase">
          <Link to="/">Glowio</Link>
        </div>

        <nav>
          <div className="absolute right-6 md:hidden top-6 scale-150">
            <GiHamburgerMenu
              onClick={showMenu}
              className="scale-150 cursor-pointer"
            />
          </div>

          <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
            <li>
              <Link to="/">All Blogs</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/myBlogs">My Blogs</Link>
                </li>
                <li>
                  <Link to="/blogs/add">Add</Link>
                </li>
                <li>
                  <Link to="/login">
                    <button onClick={logout}>Logout</button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
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
      {/* <div className="flex justify-between items-center bg-blue-300 h-[80px] ">
        <div className="ml-[100px]">
          <p className="text-2xl text-white">BlogsApp</p>
        </div>

        <div className=" flex justify-between space-x-4 mr-[100px]">
          <Link to="/blogs">
            <p className="text-white"> All Blogs</p>
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/myBlogs">
                <p className="text-white">My Blogs</p>
              </Link>
              <Link to="/blogs/add">
                <p className="text-white">Add</p>
              </Link>
              <Link to="/login">
                <button className="text-white" onClick={logout}>
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <p className="text-white">Log In</p>
              </Link>
              <Link to="/signup">
                <p className="text-white">Sign Up</p>
              </Link>
            </>
          )}
        </div>
      </div> */}
    </>
  );
};

export default Header;
