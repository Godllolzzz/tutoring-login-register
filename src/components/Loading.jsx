import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#084699",
};

function Loading() {

  return (
    <div className="sweet-loading h-[100vh] flex justify-center items-center absolute w-full bg-[#edecf267] z-20">
      <ClipLoader
        color= "#edecf267"
        loading= "true"
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="squareloader"
      />
    </div>
  );
}

export default Loading;