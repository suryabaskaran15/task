import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import emailjs from "@emailjs/browser";

const CreateNew = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
  const [create, setCreate] = useState(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9qmmq1h",
        "template_8av4v5d",
        form.current,
        "GMeXsF2ZbTREngpxX"
      )
      .then(
        (result) => {
          console.log("result", result);
        },
        (error) => {
          console.log("error", error);
        }
      )
      .catch((error) => {
        console.log("error", error);
      });
  };
  const verify = () => {
    if (otp == document.getElementById("otp").value) {
      created();
      alert("Account created successfully");
      navigate("/");
    } else {
      alert("please enter a valid otp");
    }
  };
  const created = async () => {
    const userDetails = {
      userId: document.getElementById("userId").value,
      emailId: document.getElementById("emailId").value,
      phoneNmber: document.getElementById("phoneNmber").value,
      Password: document.getElementById("password").value,
    };
    await setDoc(doc(db, "user", userDetails.userId), userDetails);
  };
  useEffect(() => setOtp(Math.round(Math.random() * 17635)), []);
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <h1>Enter Your details</h1>
        <br />
        <label>User Id : </label>
        <input id="userId" name="user_name" type={"text"} />
        <br />
        <label>Password : </label>
        <input id="password" type={"text"} />
        <br />
        <label>Email Id : </label>
        <input id="emailId" name="to_email" type={"text"} />
        <br />
        <input hidden name="message" value={otp} />
        <label>Phone No : </label>
        <input id="phoneNmber" name="phoneNumber" type={"tel"} />
        <br />
        <input type="submit" value="send" onClick={() => setCreate(false)} />
        <button onClick={() => navigate(-1)}>Back</button>
      </form>
      {!create && (
        <>
          <input id="otp" type={"number"} /> <br />
          <button onClick={verify}>Verify</button>
        </>
      )}
    </div>
  );
};

export default CreateNew;
