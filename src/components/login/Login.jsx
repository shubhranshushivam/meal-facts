import React from 'react'
import './login.scss'



export default function Login({user, setUser}) {
          
    function handleSignOut(event){
      setUser({});
      document.getElementById("signInDiv").hidden=false;
  }

  return (
    <div className="login">
        <div className="container">
          <div id="signInDiv" className='signInDiv' ></div>

              {user && <div id='userId'>
                  <img src={user.picture} alt="" id='profilePic'/>
                  <h4>{user.name}</h4>
              </div>}
              {
              Object.keys(user).length!==0 && 
              <button onClick={(e)=>handleSignOut(e)}>Sign Out</button>
              } 
          
      </div>
    </div>
  )
}
