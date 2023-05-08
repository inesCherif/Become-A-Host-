import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import PersonAddAlt1SharpIcon from "@mui/icons-material/PersonAddAlt1Sharp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { registerInitiate } from "../../redux/actions/actions";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/introduction");
    }
  }, [currentUser]);

  const dispatch = useDispatch();

  const { displayName, email, password, passwordConfirm } = state;

  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setShowPasswordError(true);
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            style={{
              textAlign: "center",
              color: "#343a40",
              fontWeight: "normal",
            }}
            className="header2"
          >
            Sign up
          </h1>
          <input
            type="text"
            id="input-sign"
            className="form-control"
            placeholder="Full Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            id="input-sign"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="input-sign"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type="password"
            id="input-sign"
            className="form-control"
            placeholder="Repeat Password"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          <button className="sign-up-btn" type="submit">
            <span className="social-btn-content">
              <PersonAddAlt1SharpIcon />
              Sign Up
            </span>
          </button>
          <Link to="/">
            <span className="social-btn-content a">
              <ArrowBackIosIcon sx={{ fontSize: "15px" }} />
              Back
            </span>
          </Link>
        </form>
        {showPasswordError && (
        <div className="body" style={{ backgroundColor: "red", color: "white", padding: "10px" }}>
          Passwords do not match!
        </div>
      )}
      </div>
    </div>
  );
};

export default Register;
