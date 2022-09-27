import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("https://blog-api-6og8.onrender.com/api/user/signup", {
        email: inputs.email,
        password: inputs.password,
        name: inputs.name,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    sendRequest()
      .then((data) => {
        console.log("data", data);
        localStorage.setItem("userId", data._id);
      })
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/"))
      .catch((error) => {
        console.log(error);
        setError(true);
        setInputs({
          name: "",
          email: "",
          password: "",
        });
      });
  };
  setTimeout(() => {
    setError(false);
  }, 5000);
  return (
    <Layout>
      <div className="flex items-center justify-center w-full">
        {/* {error && (
          <div className="toast toast-top toast-end mt-[100px]">
            <div className="alert bg-red-500">
              <div>
                <span className="text-white">
                  Something went wrong. Please try again
                </span>
              </div>
            </div>
          </div>
        )} */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-zinc-50 space-y-4 md:shadow-lg mt-[100px] p-8 md:py-6 md:px-8"
        >
          <p className="text-center mb-4 text-3xl font-semibold">Sign up</p>
          <div className="flex flex-col space-y-4">
            {/* username */}

            <div>
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700"
                id="name"
                type="text"
                placeholder="name"
                name="name"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700"
                id="password"
                type="password"
                placeholder="******"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between mt-2">
            <button
              className="bg-cyan-700 hover:bg-cyan-500 mt-8 mb-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign up
            </button>
            <div className="flex justify-between space-x-2 mt-2">
              <p>Aleady have an account?</p>
              <Link to="/login">
                <button>
                  <p className="underline underline-offset-4">Log in</p>
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
