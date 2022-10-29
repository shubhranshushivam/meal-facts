import { useState, useEffect } from "react";
import "./App.scss";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Instruction from "./components/instruction/Instruction";
import Login from "./components/login/Login";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Result from "./components/result/Result";
import Scan from "./components/scan/Scan";
import jwt_decode from 'jwt-decode';
import axios from "axios";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(true);
  const [resultOpen, setResultOpen] = useState(false);
  const [scanOpen, setScanOpen] = useState(true);

  const toggleViews = () => {
    setResultOpen(!resultOpen);
    setScanOpen(!scanOpen);
  };
  

  const [user, setUser] =useState({});

    function handleCallbackResponse(response){
        var userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById("signInDiv").hidden=true;
    }

    var check=false;
    
    if(Object.keys(user)==0 && loginOpen===true){
      check=true;
    }
    else{
      check=false;
    }

    var url="http://localhost:5000/login";

    var loggedIn=false;
    if(Object.keys(user)==0){
      loggedIn=false;
    }
    else{
      loggedIn=true;
    }

    useEffect(()=>{
      var userName= user.name;
      var userImage= user.picture;
      var userEmail = user.email;
      var date=new Date();
      var isodate= new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 19).replace('T', ' ');
      if(userEmail==undefined){
        
      }
      var queryObj=`{
        "userName": "${userName}",
        "userImage": "${userImage}",
        "date": "${isodate}",
        "userEmail": "${userEmail}"
      }`;
      var jsonObj = JSON.parse(queryObj);
      const headers={
        'Content-Type':'application/json'
      }
      if(queryObj['userEmail']!=='undefined'){
        axios.post(url, jsonObj, headers).then(
          (response) => {
              var result = response.data; 
              console.log(result);
          },
          (error) => {
              console.log(error);
          }
      );}
    },[loggedIn]);
    


    useEffect(()=>{
      /* global google */
      google.accounts.id.initialize({
        client_id:"138160144326-9jnp1ijojur9bpqnvmt62hp791u0366q.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size:"large"}
      )

      // google.accounts.id.prompt();
    }, [check]);
    
    function handleSignOut(event){
        setUser({});
        document.getElementById("signInDiv").hidden=false;
    }

    

  return (
    <div className="App">

      {(loginOpen===false) && <Login user={user} setUser={setUser}/>}
    
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      

      <div className="sections">

        
        <Home />

        {(resultOpen===false) && <Scan user={user} toggleViewFn={toggleViews}/>}
        {(scanOpen===false) && <Result toggleViewFn={toggleViews}/>}
        
        <Instruction />
        <About />
      </div>
    </div>
  );
}

export default App;
