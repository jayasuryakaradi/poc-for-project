import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import UserDetailCard from "../../Components/UserDetailCard/UserDetailCard";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
const Home = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      await axios("http://localhost:3000/users")
        .then((response) => setResData(response.data))
        .catch((error) => {
          console.log("Home Page, Fetch User Data", error);
        });
    };
    fetchUserData();
  }, [resData]);

  return (
    <div className="home-container">
      <Link to="/create" className="home-container__add-icon-container link">
        Add
        <IoAddCircle />
      </Link>
      <table>
        <caption>User Details</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {resData.map((eachUser, index) => {
            return (
              <UserDetailCard
                key={index}
                length={index}
                name={eachUser.name}
                email={eachUser.email}
                contact={eachUser.contact}
                id={eachUser.id}
              />
            );
          })}
        </tbody>
      </table>
   
    </div>
  );
};

export default Home;
