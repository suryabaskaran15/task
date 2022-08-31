import React,{useState} from "react";
import CreateNew from "./CreateNew";
import LoginSuccess from "./LoginSuccess";
import MainLogIn from "./MainLogIn"
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import ApiDetails from "./ApiDetails";
import UserDetails from "./Userdetails";
import About from "./About";

const Routing = ()=>{
    return(
        <Routes>

            <Route path = "/" element ={<MainLogIn/>}/>
            <Route path ="/create" element ={<CreateNew/>}/>
            <Route path = "/loginSuccess" element = {<LoginSuccess/>} />
            <Route path = "/loginSuccess/ApiDetails" element={<ApiDetails/>}/>
            <Route path="/loginSuccess/ApiDetails/UserDetail" element={<UserDetails/>}/>
            <Route path = "/about" element={<About/>}/>
        </Routes>
    );
}
 export default Routing ;