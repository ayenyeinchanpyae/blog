import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("https://blog-api-6og8.onrender.com/api/blog")
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  useEffect(() => {
    //get all the blogs
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 ">
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            isUser={localStorage.getItem("userId") === blog.user._id}
            key={index}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.image}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
};

export default Blogs;
