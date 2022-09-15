import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Singup";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import { useSelector } from "react-redux";

function App() {
  const isLoginIn = useSelector((state) => state.isLoginIn);
  console.log("is login ", isLoginIn);
  return (
    <>
      <Header />
      <Routes>
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
