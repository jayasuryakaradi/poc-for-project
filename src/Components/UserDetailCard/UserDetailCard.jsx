import React from "react";
import "./UserDetailCard.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const UserDetailCard = ({ length, name, email, contact, id }) => {
  const navigate = useNavigate();
  const deleteUserHandler = async () => {
    await axios
      .delete(`http://localhost:3000/users/${id}`)
      .catch((error) =>
        console.log("UserDetailCard, deleteUserHandler", error)
      );
  };

  return (
    <tr className="user-detail-card-container">
      <td className="user-detail-card-container__count">{length + 1}</td>
      <td className="user-detail-card-container__name">{name}</td>
      <td className="user-detail-card-container__email">{email}</td>
      <td className="user-detail-card-container__contact">{contact}</td>
      <td>
        <Link to={`edit/${id}`} >
          <button className="edit-btn">
            <FaEdit />
          </button>
        </Link>
      </td>
      <td>
        <button onClick={deleteUserHandler} className="delete-btn">
          <MdDeleteForever />
        </button>
      </td>
    </tr>
  );
};

export default UserDetailCard;
