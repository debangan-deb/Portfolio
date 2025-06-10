import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <section className="my-5 py-5" >
      <div className="text-center my-5">
        <h1 className="fw-bold m-3">
          Hi, I'm <span className="text-primary">Debangan Deb</span>
        </h1>
        <p className="lead text-info mb-4">Fresher</p>

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mb-4 ">
          <a href="/Resume.pdf" className="btn btn-primary text-black fw-bold col-6 col-md-auto" download>
            Download Resume
          </a>
          <a href="/contact" className="btn btn-outline-primary fw-bold col-6 col-md-auto">
            Contact Me
          </a>
        </div>

        <div className="d-flex justify-content-center gap-4 fs-3">
          <a href="https://github.com/debangan-deb/" className="text-light">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/debangan-deb/" className="text-light">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/debangandeb_/" className="text-light">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
