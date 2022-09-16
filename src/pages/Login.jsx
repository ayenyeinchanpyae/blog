import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import Layout from "../components/Layout";

const Login = () => {
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
      .post("https://blog-api-6og8.onrender.com/api/user/login", {
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
        localStorage.setItem("userId", data.user._id);
        dispatch(authActions.login());
        navigate("/");
      })

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
      <div className="flex  items-center justify-center w-full ">
        {error && (
          <div className="toast toast-top toast-end mt-[100px]">
            <div className="alert bg-red-500">
              <div>
                <span className="text-white">
                  Something went wrong. Please try again
                </span>
              </div>
            </div>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-zinc-50 space-y-4 md:shadow-lg mt-[100px] p-8 md:p-16"
        >
          <p className="text-center mb-4 text-3xl font-semibold">Login</p>
          <div className="flex flex-col space-y-4">
            <div className="">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={inputs.email}
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
                value={inputs.password}
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between ">
            <button
              className="bg-cyan-700 hover:bg-cyan-500 mt-8 mb-4 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <div className="flex justify-between space-x-2 mt-4">
              <p>Don't have an account?</p>
              <Link to="/signup">
                <button>
                  <p className="underline underline-offset-4">Sign up</p>
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
