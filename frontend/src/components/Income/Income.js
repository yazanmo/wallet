import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";
import "./Income.css";

const Income = () => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [state1, setState1] = useState(false);

  const history = useHistory();

  const token = localStorage.getItem("token");

  const booking = () => {
    axios
      .post(
        `http://localhost:5000/income`,

        { title, description, amount },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        setState1(true);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div id="outside">
        <div id="survey-form">
          <h1 id="title">Income</h1>
          <div>
            <legend>Income Details</legend>
            <div>
              <label id="title-label">Title:</label>
              <input
                className="ipt"
                type="text"
                required
                id="name"
                placeholder="Enter Title here"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />{" "}
               {" "}
            </div>
            <div>
              <label id="description-label">Description:</label>
              <input
                className="ipt"
                type="Address"
                id="address"
                placeholder="Enter Description here"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />{" "}
               {" "}
            </div>
            <div>
              <label id="amount-label">amount:</label>
              <input
                className="ipt"
                type="number"
                id="number"
                placeholder="Enter 10 digit number"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
               {" "}
            </div>
          </div>
          <div id="submitbutton">
            <button type="submit" id="submit" onClick={booking}>
              Add
            </button>{" "}
             {" "}
          </div>
          <div>
          {state1 ? (
          <div
            style={{
              margin: "20px auto",
              color: "#16a085",
              width: "300px",
              textAlign: "center",
              fontSize: "22px",
            }}
          >
        done
          </div>
        ) : (
          ""
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
