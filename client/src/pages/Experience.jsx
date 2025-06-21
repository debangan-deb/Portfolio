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
          <p className="text-info">Cognifyz Technologies · 14 May 2025 – 14 June 2025</p>
          <ul>
            <li className=" mb-3">
              Designed responsive web pages using HTML, CSS, JavaScript, and Bootstrap.
            </li>
            <li className=" mb-3">
              Set up Node.js servers with Express.js and implemented server-side rendering (EJS).
            </li>
            <li className=" mb-3">
              Built RESTful APIs to handle CRUD operations and connected them to dynamic frontend interfaces.
            </li>
            <li className=" mb-3">
              Applied advanced form validation, client-side routing, and dynamic DOM manipulation for a seamless user experience.
            </li>
            <li className=" mb-3">
              Integrated MySQL for secure data storage and implemented user authentication with authorization controls.
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
