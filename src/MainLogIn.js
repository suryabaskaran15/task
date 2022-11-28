import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const MainLogIn = () => {
  const navigate = useNavigate();
  const verify = async (id, password) => {
    const userVerify = await (await getDoc(doc(db, "user", id))).data();

    if (userVerify.userId === id && userVerify.Password === password) {
      navigate(`/loginSuccess/${id}`, { state: true });
    } else {
      alert("Enter correct userid and password");
    }
  };
  const signUp = () => {
    navigate("/create");
  };
  return (
    <div>
      <h1>Login</h1>
      <label>User Id : </label>
      <input id="usrId" type={"text"} />
      <br />
      <label>Password : </label>
      <input id="password" type={"text"} /> <br />
      <button
        onClick={() => {
          verify(
            document.getElementById("usrId").value,
            document.getElementById("password").value
          );
        }}
      >
        Okay
      </button>
      <br />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default MainLogIn;
