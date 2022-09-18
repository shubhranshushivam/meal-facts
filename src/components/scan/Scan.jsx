import React from "react";
import "./scan.scss";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Scan({toggleViewFn}) {
  

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
            />

            
            <button type="submit" onClick={()=>toggleViewFn()}><CloudUploadIcon className="icon"/></button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
