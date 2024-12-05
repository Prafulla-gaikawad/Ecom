import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   Navigate,
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
import "./App.css";
import { Login } from "./features/auth/components/Login";
import {
  ForgotPasswordPage,
  LoginPage,
  ResetPasswordPage,
  SignupPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          exact
          path="/reset-password/:userId/:passwordResetToken"
          element={<ResetPasswordPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
