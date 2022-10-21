import React, {useState, useEffect} from "react";
import "./loading.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactLoading from "react-loading";


export default function Loading({ toggleViewFn }) {


  return (
    <div className="result" id="result">
      <div className="container">
        <div className="midComponent">
          
              <ReactLoading type="spin" color="#FFFFFF" 
        height={150} width={100} />
           
        </div>
      </div>
    </div>
  );
}
