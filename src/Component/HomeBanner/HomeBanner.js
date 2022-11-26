import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
// import "./HomeBanner.css"

const HomeBanner = () => {
  const [image, setImage] = useState();

  // let client_id=KJpJgKzjMOABCk8xFM2mtf6oj5RYEESnkL6LJN-uXJg;
  let url =
    "https://api.unsplash.com/photos/random/?client_id=KJpJgKzjMOABCk8xFM2mtf6oj5RYEESnkL6LJN-uXJg";

  useEffect(() => {
    random();
  }, []);

  const random = async () => {
    try{
      const response = await axios(url);
     
      setImage(response.data.urls.regular);
    } catch (err){
      console.log(err)
    }
    
  };

  return (
    <div className="container">
      <div className="row">
        <div class="banner">
          <div class="maintxt">
            {<img src={image} alt="pic" className="mw-100" style={{width:'120%', height:'80vh'}} />}
            <span class="carousel-caption">
            <h2>Unsplash</h2> The internet’s source for visuals. Powered by creators
              everywhere.
            <Search />
            
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
