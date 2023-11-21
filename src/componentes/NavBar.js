import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>React Books App</h1>
      </div>
      <div>
        <Link to="/favourites">
        <h3>Tus Favoritos</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
