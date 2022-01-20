import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [state1, setState1] = useState(false);

  const signIn = () => {
    axios
      .post(`http://localhost:5000/login`, { email, password })
      .then((result) => {
        setState1(false);

        localStorage.setItem("token", result.data.token);
        localStorage.setItem("role", result.data.role);
        
        if (result.data.role==="user") {
          history.push("/");
        } else {
          history.push("/userinfo");
        }
        
      })
      .catch((err) => {
        setState1(true);
        throw err;
      });
  };

  return (
    <div id="login-box">
      <div className="form">
        <h1>Log in</h1>
        <br></br>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter E-mail Here"
        />
        <br></br>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter Password Here"
        />
        <br></br>
        <button className="login" onClick={signIn}>
          login
        </button>
        {state1 ? (
          <div
            style={{
              color: "red",
              width: "200px",
              textAlign: "center",
              fontSize: "22px",
            }}
          >
            email or password not correct
          </div>
        ) : (
          ""
        )}
        <p>
          {" "}
          Do not have an account ?
          <span>
            <Link className="render" to="/signup">
              {" "}
              Sign Up
            </Link>
          </span>
        </p>{" "}
      </div>
    </div>
  );
};

export default Login;
