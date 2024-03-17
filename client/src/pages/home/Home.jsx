import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="ho-note">
        <h1>Welcome Admin Panel</h1>
      </div>
    <div className="graph">
        <div className="bx1"></div>
        <div className="bx2"></div>
        <div className="bx3"></div>
        <div className="bx4"></div>
        <div className="bx5"></div>
    </div>
    </div>
  );
}

export default Home;
