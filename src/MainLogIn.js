import React from 'react';
import ComponentRendering from './ComponentRendering';
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
class MainLogInClass extends React.Component{
  constructor(){
    super();
    this.state ={
      usrId : undefined ,
      password : undefined,
    }
  }
  usrId = "12345";
  passWord = "12345";
 verify = async ()=>{
 await this.setState({
    usrId : document.getElementById('usrId').value,
    password : document.getElementById('password').value
  })
  if(this.usrId === this.state.usrId && this.passWord === this.state.password){
    this.props.navigate("/loginSuccess",{
      state:{
        id:this.state.usrId,
        password:this.state.password,
        flag:true
      }
    });
  }
  else{
    alert("Enter correct userid and password");
  }
 }
  createNew =()=>{
    this.props.navigate("/create");
  }
  
  render(){
    

    return(
      <div>
        <div>
            <h1>Login</h1>
            <label>User Id :  </label>
            <input id='usrId' type={'number'}/>
            <br/>
            <label>Password :  </label>
            <input id='password' type={"password"}/> <br/>
            <button  onClick={this.verify}>Okay</button>
            <br/>
            <button onClick={this.createNew}>Create New</button>
       </div>
    </div>
    );
    
  }
}


const  MainLogIn = ()=>{
  let navigate = useNavigate();
  let location = useLocation();
  return(
    <MainLogInClass navigate = {navigate} />
  )
}

export default ComponentRendering(MainLogIn);