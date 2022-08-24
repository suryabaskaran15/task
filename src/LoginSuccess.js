import React,{useState} from "react";
import MainLogIn from "./MainLogIn";

const LoginSuccess =(props)=>{
  
let [id,NewId] = useState(props.id);
let [password , NewPassword] = useState(props.password);
let [flag,Newflag] = useState(props.flag);

const back = ()=>{
  Newflag(false);
}
    return(
      <div>
        {flag ?
      <>
      <h1>Your log-in successful.....!</h1>
      <br/>
      <h3>
        user Id :  {id}
      <br/>
        password :  {password}
      </h3>
      <button onClick={back}>Back</button>
      </>
      : <MainLogIn />
    }
      </div>
      
    );
  }

  export default LoginSuccess;