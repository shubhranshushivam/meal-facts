import React, { useState } from "react";
import axios from "axios";
import "./scan.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";


export default function Scan({ toggleViewFn, user}) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");


  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  
  var statusUser=false;
  if(Object.keys(user).length!=0){
    statusUser=true;
  }
  else{
    statusUser=false;
  }

  // console.log(file);
  // console.log(fileName);

  var url="http://localhost:5000/data";

  function uploadFile() {
    if(!statusUser){
      alert("Please login First");
      return;
    }
    var queryObj=`{"fileName": "${fileName}"}`;
    var jsonObj = JSON.parse(queryObj)
    console.log(jsonObj)
    console.log(url)
    const headers={
      'Content-Type':'application/json'
    }
    toggleViewFn();
    axios.post(url, jsonObj, headers).then(
        (response) => {
            var result = response.data;
            
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}


  return (
    <div className="scan" id="scan">
      <div className="container">
        <div className="midComponent">
          <div className="button">
            <input
              type="file"
              name="img"
              id="img"
              accept=".jpg,.png"
              capture="camera"
              onChange={saveFile}
            />

            <button type="submit" onClick={uploadFile}>
              <CloudUploadIcon className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
