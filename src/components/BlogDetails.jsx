import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const id = useParams().id;
  const [inputs, setInputs] = useState({});
  console.log(id);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios
      .get(`https://blog-api-6og8.onrender.com/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
        imageURL: data.blog.image,
      });
    });
  }, [id]);

  console.log(blog);

  const sendRequest = async () => {
    const res = await axios
      .put(`https://blog-api-6og8.onrender.com/api/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myBlogs/"));
  };

  return (
    <div className="flex items-center justify-center w-full">
      {inputs && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 md:shadow-lg  mt-[50px] p-8 md:w-[50%] border-solid border-2 border-sky-300 rounded-[20px]"
        >
          <p className="text-center mb-4 text-3xl font-semibold">
            Add a new blog
          </p>
          <div className="flex flex-col space-y-4">
            <div className="">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700"
                id="title"
                type="text"
                placeholder="your blog's title"
                name="title"
                onChange={handleChange}
                value={inputs.title}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="border rounded w-full py-2 px-3 text-gray-700"
                id="description"
                type="text"
                placeholder="blog description"
                name="description"
                onChange={handleChange}
                value={inputs.description}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="imageURL"
              >
                Image URl
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700"
                id="imageURL"
                type="text"
                placeholder="imageURL"
                name="imageURL"
                onChange={handleChange}
                value={inputs.imageURL}
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BlogDetails;
