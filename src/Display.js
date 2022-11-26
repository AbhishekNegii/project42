import React, { useContext, useState } from "react";
import CartContext from "./Context/Cart-Context";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { saveAs } from 'file-saver'
import "./Display.css";

const Display = () => {
  const [data, setData] = useState({ img: "", i: 0 });
  const [modal, setModal] = useState(false);
  const[img,setImg]=useState()

  const imgCtx = useContext(CartContext);

  console.log("i", imgCtx.item.length);
  const arr = [];
  for (let i = 0; i < 30; i++) {
    arr.push(imgCtx.item[i]);
  }

  const viewImage = (img, i) => {
    console.log(img, i);
    setData({ img, i });
    setModal(true);
   setImg(img)
  };


  const downloadImage = () => {
    saveAs(img, 'image.jpg') 
  }


  return (
    <>
      <br />
      <br />
      <br />

      {modal && (
        <div className="sliderwrap">
          <div className="overlay">
            <div className="fullScreenImage">
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                X
              </button>
              <img
                src={data.img}
                alt="pic"
                style={{ width: "auto", maxWidth: "70%" }}
              />
              <button onClick={downloadImage}>Download</button>
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "10px" }}>
        <div columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {imgCtx.item.length > 0 &&
              arr.map((item, i) => {
                return (
                  <img
                    key={i}
                    src={item.urls.regular}
                    alt="pic"
                    style={{
                      width: "100%",
                      display: "block",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      viewImage(item.urls.regular, i);
                    }}
                  />
                );
              })}
          </Masonry>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Display;
