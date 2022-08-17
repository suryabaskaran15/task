import React,{useState} from "react";

const LoginSuccess =(props)=>{
  
  let usrdetail = {
    usrId : props.id,
    password : props.password
  }

    return(
      <>
      <h1>Your log-in successful.....!</h1>
      <br/>
      <h3>
        user Id :  {usrdetail.usrId}
      <br/>
      password :  {usrdetail.password}
      </h3>
      {console.log("sucessful..!")}
      </>
    );
  }

  export default LoginSuccess;