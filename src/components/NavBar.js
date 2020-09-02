import React from "react";

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
      <li class="nav-item">
        <a class="nav-link active" href="#">
          About Me
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          My Projects
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Contact Me
        </a>
      </li>
    </ul>
  );
}
