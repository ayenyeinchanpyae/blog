import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  console.log("id", id);
  const sendRequest = async () => {
    const res = await axios
      .get(`https://blog-api-6og8.onrender.com/api/blog/user/${id}`)
      .catch((error) => console.log(error));
    const data = await res.data;
    console.log("data", data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log("user blogs", user);

  return (
    <div className="flex flex-wrap gap-4 justify-center pt-[80px]">
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={true}
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

export default UserBlogs;
