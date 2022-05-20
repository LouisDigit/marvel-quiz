import Footer from "../Footer";
import Landing from "../Landing";
import Welcome from "../Welcome";
import Login from "../Login";
import ErrorPage from "../ErrorPage";
import Signup from "../SignUp";
import "./../../App.css";
import Header from "./../Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
