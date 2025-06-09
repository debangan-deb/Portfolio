import React from "react";

const Resume = () => {
  return (
    <section className="py-5 text-center">
      <h2 className="mb-5 border-bottom border-primary d-inline-block text-primary">
        My Resume
      </h2>
      <div className="border border-secondary p-3 rounded mx-auto w-sm-300" style={{ maxWidth: "700px", width: "75%" }} >
        <iframe
          src="/Resume.pdf"
          width="100%"
          height="600px"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
