import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import VerifyEmail from "../pages/auth/VerifyEmail"
import VerifySecurityCode from "../pages/auth/VerifySecurityCode"
import Register from "../pages/auth/Register";
import MyProfile from "../pages/MyProfile";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/verify-security-code" element={<VerifySecurityCode />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  );
}