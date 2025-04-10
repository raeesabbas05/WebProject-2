import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import SignInPage from "../pages/Auth/Signin";
import SignUpPage from "../pages/Auth/Signup";
import ForgetPasswordPage from "../pages/Auth/ForgetPassword";
import ProfilePage from "../pages/Profile";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Graph from "../components/Graph";

export function AppRoutes() {
  return (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/signin" element={<SignInPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/forgot-password" element={<ForgetPasswordPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/graph" element={<Graph />} />
    <Route path="/" element={<Navigate to="/home" />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
  );
}
