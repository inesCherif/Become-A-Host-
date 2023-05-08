import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import PersonAddAlt1SharpIcon from "@mui/icons-material/PersonAddAlt1Sharp";
import LoginIcon from "@mui/icons-material/Login";
import {
  googleSignInInitiate,
  loginInitiate,
} from "../../redux/actions/actions";
import { googleAuthProvider } from "../../firebase";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/introduction");
    }
  }, [currentUser]);

  const dispatch = useDispatch();

  const handleFacebookSignIn = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || ![password]) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
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
            Sign in
          </h1>
          <div className="social-login">
            <button
              className="social-btn social-btn-google"
              type="button"
              onClick={googleAuthProvider}
            >
              <span className="social-btn-content">
                <GoogleIcon />
                Sign in with Google+
              </span>
            </button>
            <button
              className="social-btn social-btn-facebook"
              type="button"
              onClick={handleFacebookSignIn}
            >
              <span className="social-btn-content">
                <FacebookSharpIcon />
                Sign in with Facebook
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center", color: "gray" }} className="body">
            OR
          </p>
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
          <button className="Sign-btn" type="submit">
            <span className="social-btn-content">
              <LoginIcon />
              Sign In
            </span>
          </button>
          <hr />
          <p style={{ textAlign: "center", color: "gray" }} className="body">
            Don't have an account
          </p>
          <Link to="/register">
            <button className="" type="button" id="btn-signup">
              <span className="social-btn-content">
                <PersonAddAlt1SharpIcon />
                Sign up New Account
              </span>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
