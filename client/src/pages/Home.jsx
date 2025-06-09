import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <section className="my-5 py-5">
      <div className="text-center my-sm-4">
        <h1 className="display-4 fw-bold m-3">
          Hi, I'm <span className="text-primary">Debangan Deb</span>
        </h1>
        <p className="lead text-info mb-4">Fresher</p>

        <div className="d-flex justify-content-center gap-3 mb-4 ">
          <a href="/Resume.pdf" className="btn btn-primary text-black fw-bold" download>
            Download Resume
          </a>
          <a href="/contact" className="btn btn-outline-primary fw-bold">
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
