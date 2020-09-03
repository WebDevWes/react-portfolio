import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a
          class="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Wesaboo
        </a>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={
            window.location.pathname === "/about"
              ? "nav-link active"
              : "nav-link"
          }
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={
            window.location.pathname === "/projects"
              ? "nav-link active"
              : "nav-link"
          }
        >
          My Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            window.location.pathname === "/contact"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
}
