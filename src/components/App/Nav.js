import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "../../style/Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/battle" activeClassName="active">
            Battle{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/popular" activeClassName="active">
            Popular{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="active">
            Search{" "}
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Nav;
