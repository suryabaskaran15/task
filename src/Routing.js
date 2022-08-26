import React,{useState} from "react";
import CreateNew from "./CreateNew";
import LoginSuccess from "./LoginSuccess";
import MainLogIn from "./MainLogIn"
import { BrowserRouter, Routes ,Route} from "react-router-dom";


const Routing = ()=>{
    return(
        <Routes>
            <Route path = "/" element ={<MainLogIn/>}/>
            <Route path ="/create" element ={<CreateNew/>}/>
            <Route path = "/loginSuccess" element = {<LoginSuccess/>} />
        </Routes>
    );
}
 export default Routing ;