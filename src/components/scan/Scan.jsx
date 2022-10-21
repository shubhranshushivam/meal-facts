import React, { useState } from "react";
import axios from "axios";
import "./scan.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function Scan({ toggleViewFn }) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");


  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };


  // console.log(file);
  // console.log(fileName);

  var url="http://localhost:5000/data";

  function uploadFile() {
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

  // const uploadFile = async (e) => {
  //   // var formData = new FormData();
  //   // formData.append("fileName", fileName);
  //   // formData.append("from", "frontend");
  //   // console.log(formData);
  //   console.log({"fileName":fileName})
  //   return postImage(`/data`, {fileName:fileName}).then((res)=>res);

    // try {
    //   const res = await fetch("http://localhost:5000/data", {
    //     method:"POST",
    //     headers:{
    //       'Content-Type':'application/json',
    //     },
    //     body: JSON.stringify(fileName)
    //   }).then((response)=>{
    //     console.log(response)
    //   }).catch(err=> console.log(err));
    //   console.log(res);
    // } catch (ex) {
    //   console.log(ex);
    // }
    
    
  // };

  // let postImage = (endpoint, formData)=>{
  //   console.log(formData)
  //   const customHeaders = {
  //     headers:{
  //       "Content-Type":"application/json",
  //     },
  //   };

  //   let url = `http://localhost:5000${endpoint}`;
  //   return axios.post(url, formData, customHeaders).then((res)=>({
  //     status: res.status,
  //     data: res.data,
  //     error: null,
      
  //   }))
  //   .catch((err)=>{
  //     return {
  //       status: err.response ? err.response.status:0,
  //       data: {},
  //       error: err.message,
  //     };
  //   });
  //   toggleViewFn();
  // };

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
