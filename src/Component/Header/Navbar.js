import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Editorial
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Following
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Experimental
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                3D Renders
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Architecture & Interiors
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Fashion & Beauty
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Current Events
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Nature
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Food & Drink
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Film
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                People
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Athletics
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Street Photography
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
