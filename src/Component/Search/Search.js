import React, { useContext, useState } from "react";
import axios from "axios";
import Display from "../../Display";
import CartContext from "../../Context/Cart-Context";

const Search = () => {
  const [text, setText] = useState("");
  


  const imgCtx=useContext(CartContext)
 

  const searchHandler = async () => {
    const response = await axios(
      `https://api.unsplash.com/search/photos?client_id=KJpJgKzjMOABCk8xFM2mtf6oj5RYEESnkL6LJN-uXJg&query=${text}&per_page=30`
    );
    const data = response.data.results;
    // console.log(data);
    console.log(data[0].urls.regular);
    
   imgCtx.addItem(data)
   
  };

  return (
    <div>
      <div style={{ textAlign: "center", paddingTop: "15%" }}>
        <input
          //   class="form-control me-3"
          aria-label="Search"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{width:'80%'}}
          
        />
        <button class="btn btn-outline-success" onClick={searchHandler}>
          Search
        </button>
      </div>
      
    </div>
  );
};

export default Search;
