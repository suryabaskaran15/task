import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { db } from "./firebase";

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userVerify, setuserVerify] = useState(location.state);

  const saveChanges = async () => {
    alert("Confirm to save changes");
    await setDoc(doc(db, "user", userId), {
      userId: document.getElementById("userId").value,
      emailId: document.getElementById("emailId").value,
      phoneNmber: document.getElementById("phoneNmber").value,
      Password: document.getElementById("password").value,
    });
    navigate(`/loginSuccess/${userId}`, { state: true });
  };

  return (
    <>
      <label>User Id : </label>
      <input id="userId" type={"text"} defaultValue={userVerify.userId} />
      <br />
      <label>Password : </label>
      <input id="password" type={"text"} defaultValue={userVerify.Password} />
      <br />
      <label>Email Id : </label>
      <input id="emailId" type={"text"} defaultValue={userVerify.emailId} />
      <br />
      <label>Phone No : </label>
      <input
        id="phoneNmber"
        type={"tel"}
        defaultValue={userVerify.phoneNmber}
      />
      <br />
      <button onClick={saveChanges}>Save changes</button>
      <button onClick={() => navigate(-1)}>Cancel and Back</button>
    </>
  );
};

export default EditProfile;
