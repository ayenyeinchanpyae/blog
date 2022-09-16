import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
const AddBlog = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("https://blog-api-6og8.onrender.com/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      })
      .catch((error) => console.log(error));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myBlogs"));
  };
  return (
    <Layout>
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 md:shadow-lg  mt-[100px] p-8 md:w-[50%]  bg-zinc-50"
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
              className="bg-cyan-700 hover:bg-cyan-500 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddBlog;
