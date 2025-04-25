import React from "react";
import TypedText from "./TypedText";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="col-lg-4 sticky-lg-top vh-100">
      <div className="d-flex flex-column h-100 text-center overflow-auto shadow">
        <img className="w-100 img-fluid mb-4" src="assets/img/profile.jpg" alt="John Doe" />
        <h1 className="text-primary mt-2">Kuldip Patel</h1>
        <div className="mb-4" style={{ height: "22px" }}>
          <TypedText/>
        </div>
        <div className="d-flex justify-content-center mt-auto mb-3">
          <a className="btn btn-secondary btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-secondary btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-secondary btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-secondary btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="d-flex align-items-end justify-content-between border-top">
        <a href="/assets/Report.pdf" download className="btn w-50 border-end">Download CV</a>
        <Link to="contact" className="btn w-50 btn-scroll"   onClick={() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });}}>Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
