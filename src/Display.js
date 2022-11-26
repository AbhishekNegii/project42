import React, { useContext, useState } from "react";
import CartContext from "./Context/Cart-Context";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Display = () => {

  const [data,setData]=useState({img:'', i:0})
 

  const imgCtx = useContext(CartContext);

  console.log("i", imgCtx.item.length);
  const arr = [];
  for (let i = 0; i < 30; i++) {
    arr.push(imgCtx.item[i]);
  }

  const viewImage=(img,i)=>{
    console.log(img,i)
    setData({img,i})
  }

  return (
    <>
    {
      data.img && 
      <div style={{
        width:'100%',
        height: '100vh',
        background:'black',
        position:'fixed',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
      }}>
        <button>X</button>
        <img src={data.img} alt='pic' style={{width:'auto', maxWidth:'90%'}}/>

      </div>
    }
    <div style={{padding:'10px'}}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {imgCtx.item.length > 0 &&
            arr.map((item, i) => {
              return (
                <img
                  key={i}
                  src={item.urls.regular}
                  alt="pic"
                  style={{ width: "100%", display: "block" ,cursor:'pointer'}}
                  onClick={()=>{viewImage(item.urls.regular,i)}}
                />
              );
            })}
        </Masonry>
      </ResponsiveMasonry>
      <hr />

     </div>
     </>
  );
};

export default Display;
