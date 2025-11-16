import React from "react";

const Piece = ({ color }) => {
  return (
    <>
      {/* BLACK */}
      {/* <div className='size-[60px] bg-[#41403d] border-2 border-black rounded-full flex justify-center items-center'>
       <div className='size-[48px] bg-[#1f1f1f]  rounded-full'></div>
     </div> */}

      {/* WHITE */}
      <div
        className={`size-[60px] ${
          color == "white" ? "bg-yellow-50" : "bg-[#41403d]"
        } border-2 border-black rounded-full flex justify-center items-center shadow-2xl`}
      >
        <div
          className={`size-[48px] ${
            color == "white" ? "bg-[#e2d1bb]" : "bg-[#1f1f1f]"
          } rounded-full`}
        ></div>
      </div>
    </>
  );
};

export default Piece;
