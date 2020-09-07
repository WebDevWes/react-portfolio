import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <div
            class="nav-link disabled"
            style={{ fontSize: "1.3rem", fontWeight: "bold" }}
            tabindex="-1"
            aria-disabled="true"
          >
            Wesley Tran
          </div>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={
              window.location.pathname === "/about" ||
              window.location.pathname === "/"
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
    </nav>
  );
}
