import React, { useEffect } from "react";
import "./EditPage.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [state, setState] = React.useState({
    name: "",
    contact: "",
    email: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchUserData = async () => {
    await axios(`http://localhost:3000/users/${id}`)
      .then((response) => setState(response.data))
      .catch((error) => {
        console.log("Home Page, Fetch User Data", error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, state).catch((error) => {
      console.log("EditPage, HandleEditChanges", error);
    });
    navigate("/");
  };

  return (
    <div className="edit-page-container form-container">
      <form
        onSubmit={onSubmitHandler}
        className="edit-page-container__form-container"
      >
        <div className="table-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="table-div">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="table-div">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={state.contact}
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

export default EditPage;
