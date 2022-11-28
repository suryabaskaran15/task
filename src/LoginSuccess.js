import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const LoginSuccess = (props) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogIn, setIsLogIn] = useState(location.state);
  const [userDetails, setuserDetails] = useState({});
  let user;
  const getFromDb = async () => {
    user = (await getDoc(doc(db, "user", userId))).data();
    setuserDetails(user);
  };
  const back = () => {
    navigate(-1);
  };
  useEffect(() => {
    getFromDb();
    if (!isLogIn) {
      navigate("/");
    }
  }, [isLogIn]);
  return (
    <>
      {isLogIn && (
        <div>
          <h1>Your log-in successful.....!</h1>
          <br />
          <h3>
            user Id : {userDetails.userId}
            <br />
            password : {userDetails.Password}
            <br />
            Mobile : {userDetails.phoneNmber}
            <br />
            Email : {userDetails.emailId}
          </h3>
          <button
            onClick={() =>
              navigate(`/loginSuccess/${userId}/editprofile`, {
                state: userDetails,
              })
            }
          >
            Edit
          </button>
          <button onClick={back}>Back</button>
          <button onClick={() => setIsLogIn(false)}>Sign Out</button>
        </div>
      )}
    </>
  );
};

export default LoginSuccess;
