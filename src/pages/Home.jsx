import React from "react";
import { Link } from "react-router-dom";
import pizza from "../assets/pizza.jpeg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div
          className="headerContainer"
          style={{ background: `url(${pizza})` }}
        >
          <h1>Pizza Place</h1>
          <p>Pizza For All</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
