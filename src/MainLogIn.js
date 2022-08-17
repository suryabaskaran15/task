import React from 'react';
import CreateNew from './CreateNew';
import LoginSuccess from './LoginSuccess';

class MainLogIn extends React.Component{
  constructor(){
    super();
    this.state ={
      usrId : undefined ,
      password : undefined,
      logIn : false,
      createNew : false,
      MainLogIn : true
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
     this.setState({
      logIn:true,
      createNew : false
    })
  }
  else{
    this.setState({
      logIn : false,
      createNew : false
    })
    alert("Enter correct userid and password");
  }
 }
  createNew =()=>{
    this.setState({
      createNew : true,
      logIn : false,
      MainLogIn : false
    })
  }
  
  render(){
    

    return(
      <div>
      {this.state.MainLogIn ?
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
       : null
       }
      {this.state.logIn ? 
      <LoginSuccess id = {this.state.usrId} password = {this.state.password}/> 
      : null}
      {this.state.createNew  ?
            <CreateNew  />
      : null
      }
      {console.log("render")}
    </div>
    );
    
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUpdate(){
    console.log("componentwillupdate")
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
}


export default MainLogIn;