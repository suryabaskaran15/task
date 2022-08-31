import React,{useState} from "react";
import MainLogIn from "./MainLogIn";
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import ComponentRendering from "./ComponentRendering";

const LoginSuccess =(props)=>{
const location = useLocation();
  
let [id,NewId] = useState(location.state.id);
let [password , NewPassword] = useState(location.state.password);
let [flag,Newflag] = useState(location.state.flag);
const navigate = useNavigate();
const back = ()=>{
  navigate(-1);
}

const userDetails = ()=>{
  navigate("/loginSuccess/ApiDetails");
}
    return(
      <div>
      <>
      <h1>Your log-in successful.....!</h1>
      <br/>
      <h3>
        user Id :  {id}
      <br/>
        password :  {password}
      </h3>
      <button onClick={userDetails}>User details</button>
      <button onClick={back}>Back</button>
      </>
      </div>
      
    );
  }

  export default ComponentRendering(LoginSuccess);