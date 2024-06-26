import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgNametag } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import './AddPage.css'
const AddPage = () => {
  const [data, setData] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const naviagte = useNavigate();
  const [getId, setGetId] = useState(0);
  const id = parseInt(getId.id) + 1;

  useEffect(() => {
    const fetchId = async () => {
      await axios("http://localhost:3000/count")
        .then((res) => setGetId(res.data))
        .catch((error) => console.log());
    };
    fetchId();
  }, [getId]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", { ...data, id: id.toString() })
      .catch((error) => console.log("AddPage, handleSubmit", error));
    axios
      .put("http://localhost:3000/count", { id: id.toString() })
      .catch((error) => console.log("AddPage, handleSubmit", error));
    naviagte("/");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={onSubmitHandler}
        className="edit-page-container__form-container"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={data.contact}
            onChange={handleChange}
            autoComplete="off"
            required
          />  
        </div>
        <div className="button-container">
          <button type="submit">Save</button>
          <Link className="link" to="/">
            <button>Cancle</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
