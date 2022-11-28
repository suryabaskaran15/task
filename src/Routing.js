import React, { useState } from "react";
import CreateNew from "./CreateNew";
import LoginSuccess from "./LoginSuccess";
import MainLogIn from "./MainLogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from "./EditProfile";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLogIn />} />
      <Route path="/create" element={<CreateNew />} />
      <Route path="/loginSuccess/:userId" element={<LoginSuccess />} />
      <Route
        path="/loginSuccess/:userId/editprofile"
        element={<EditProfile />}
      />
    </Routes>
  );
};
export default Routing;
