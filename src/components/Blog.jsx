import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Blog = ({ title, description, imageUrl, userName, isUser, id }) => {
  const navigate = useNavigate();
  console.log("is user", isUser);

  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`https://blog-api-6og8.onrender.com/api/blog/delete/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log("delete data", data);
    return data;
  };

  const handleDelete = () => {
    deleteRequest().then(() => navigate("/myBlogs"));
  };

  return (
    <>
      <div className="w-96 bg-slate-50 shadow-xl p-4">
        <figure className="flex justify-center p-2">
          <img src={imageUrl} className="w-[350px] h-[300px]" alt="Shoes" />
        </figure>
        {isUser ? (
          ""
        ) : (
          <div className="card-actions justify-end">
            <div className="mr-4">{userName}</div>
          </div>
        )}
        <div className="px-4 pb-4">
          {isUser && (
            <div className="flex justify-end space-x-4">
              <FiEdit className="text-xl cursor-pointer" onClick={handleEdit} />
              <MdDelete
                className="text-xl cursor-pointer"
                onClick={handleDelete}
              />
            </div>
          )}
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
