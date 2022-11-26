import React from "react";
import Search from "../Search/Search";

const Navbar1 = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div>
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unsplash-512.png"
          alt="unsplash"
          width="5%"
        />
      </div>
      <div>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar1;
