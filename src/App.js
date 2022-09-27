import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Blogs from "./pages/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetails from "./pages/BlogDetails";
import AddBlog from "./pages/AddBlog";
import { useSelector } from "react-redux";
import Home from "./pages/Home";

function App() {
  const isLoginIn = useSelector((state) => state.isLoginIn);
  console.log("is login ", isLoginIn);
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Blogs />} />
        <Route path="/myBlogs" element={<UserBlogs />} />
        <Route path="/myBlogs/:id" element={<BlogDetails />} />
        <Route path="/blogs/add" element={<AddBlog />} />
      </Routes>
    </>
  );
}

export default App;
