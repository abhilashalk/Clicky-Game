import React from "react";
import "./navbar.css";

const Navbar = props => (
    <div className="section">
        <nav className="navbar fixed-top navbar-dark ">
            <span className="navbar-text">
                Clicky Game
  </span>
            <div className="scores">
                Score: {props.score} Highscore: {props.highscore}
            </div>
        </nav>
    </div>
);

export default Navbar;