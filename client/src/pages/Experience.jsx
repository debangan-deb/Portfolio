import React from 'react';

const Experience = () => {
  return (
    <section className="py-5 px-3 text-center">
      <div className="rounded border px-1 pt-4 mt-5 mx-auto " style={{ maxWidth: "700px", width: "80%" }}>
        <h2 className=" mb-3 border-bottom border-primary text-primary d-inline-block">
          Experience
        </h2>
        <div className="p-3">
          <h3 className="fs-5 ">Full Stack Developer Intern</h3>
          <p className="text-info">Future Interns · 1 June 2025 – 30 June 2025</p>
          <ul>
            <li className=" mb-3">
              Built portfolio site & mini e-commerce app using React, Node.js, MySQL & Bootstrap.
            </li>
            <li className=" mb-4">
              Implemented contact form with email alerts & full user auth with CRUD functionality.
            </li>
          </ul>
          <a
            href="https://www.dropbox.com/scl/fi/83ytiyli74wygjx5mfj2s/Future-Internss.pdf?rlkey=yly2tcnwofgk1ge79tiux1rkt&st=uvc6fsss&dl=0"
            className="btn btn-primary text-white mb-3"
          >
            Certificate →
          </a>
        </div>
        <div className="p-3">
          <h3 className="fs-5 ">Full Stack Developer Intern</h3>
          <p className="text-info">Cognifyz Technologies · 14 May 2025 – 14 June 2025</p>
          <ul>
            <li className=" mb-3">
              Built responsive UIs and dynamic pages using HTML, CSS, JS & Bootstrap.
            </li>
            <li className=" mb-3">
              Implemented MySQL integration with user auth and full CRUD functionality.
            </li>
          </ul>
        </div>
        <a
          href="https://www.dropbox.com/scl/fi/bmrbjpat3c08puisqv5je/Cognifyz-Technologies.pdf?rlkey=zykop8234iwinco1hkol4q5c6&st=wypp06ac&dl=0"
          className="btn btn-primary text-white mb-3"
        >
          Certificate →
        </a>
      </div>
    </section>
  );
};

export default Experience;
