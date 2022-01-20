import React, { useState, useEffect } from "react";
import axios from "axios";

import "./home.css";

export default function Home() {
  const [income, setIncome] = useState("");
  const [outcome, setOutcome] = useState("");
  const [totalincome, setTotalincome] = useState("");
  const [totaloutcome, setTotaloutcome] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/outcome`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setIncome(result.data);

        const sumTotal = result.data
          ?.map((data) => data?.amount)
          .reduce((acc, curr) => {
            return Number(acc) + Number(curr);
          }, 0);

        setTotalincome(sumTotal);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/income`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        const sumTotal = result.data
          ?.map((data) => data?.amount)
          .reduce((acc, curr) => {
            return Number(acc) + Number(curr);
          }, 0);

        setTotaloutcome(sumTotal);
        setOutcome(result.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
    <div className="title">balance of wallet : {totalincome-totaloutcome} $</div>

    <div className="wallet">
      <div>
      <span className="income">In come : {totalincome} $</span>
        <div className="parantseller">
          {income &&
            income.map((elem, i) => {
              return (
                <div className="card">
                  <div className="card-header">description :  {elem.description}</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">title : {elem.title}</li>
                    <li className="list-group-item">amount : {elem.amount}$</li>
                  </ul>
                </div>
              );
            })}
         
        </div>
      </div>
      <div>
        <span className="outcome">Out come : {totaloutcome} $</span>
        <div>
          {outcome &&
            outcome.map((elem, i) => {
              return (
                <div className="card">
                  <div className="card-header">description : {elem.description}</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">title : {elem.title}</li>
                    <li className="list-group-item">amount : {elem.amount}$</li>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
      
    </div>
    </div>
  );
}
