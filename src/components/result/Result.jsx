import React, {useState, useEffect} from "react";
import "./result.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactLoading from "react-loading";
import Loading from "../loading/Loading";


export default function Result({ toggleViewFn }) {

  const [loading, setLoading]= useState(false);

  const [data, setData]= useState({
    name:"",
    calories:0,
    image:"no_image.jpg",
    recipe: "",
  });

  useEffect(()=>{
    setLoading(true);
    fetch("http://localhost:5000/getData").then((res)=>
    res.json().then((data)=>{
      setData({
        name: data.name,
        calories: data.calories,
        image: data.image,
        recipe: data.recipe,
      });
      setLoading(false);
    })
    );
  },[]);

  console.log(data.name);
  console.log(data.calories);
  // data.calories= "Calories:"+data.calories;
  console.log(data.image);

  var imgSrc=`"images/${data.image}"`
  console.log(imgSrc)

  if(loading){
    return <Loading/>
  }


  return (
    <div className="result" id="result">
      <div className="container">
        <div className="midComponent">
          <div className="left">
              <button type="submit" className="btn" onClick={() => toggleViewFn()}>
                <ArrowBackIcon />
                <h5>Back</h5>
              </button>
              
            <img src={`/images/${data.image}`} alt={data.name} />
          </div>
          <div className="right">
            <div className="heading">
              <h2>{data.name}</h2>
              <h3>Calories: {data.calories} cal</h3>
            </div>
            <div className="recipe">
              {data.recipe}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
