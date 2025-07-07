import React from "react";

const Education = () => {
  return (
    <section className="py-5 text-center">
      <div>
        <h2 className="mb-5 border-primary border-bottom text-primary d-inline-block">
          Education
        </h2>

        <div className="mb-4 p-3 pb-0 mx-auto rounded border text-center" style = {{maxWidth:"500px", width:"70%"}}>
          <h3 className="fs-5 text-light">Masters of Computer Applications (MCA)</h3>
          <p className="text-info mb-2">SRM University · July 2024 – Present</p>
          <p>CGPA : 8.52 / 10</p>
        </div>

        <div className="mb-4 p-3 pb-0 mx-auto rounded border text-center " style = {{maxWidth:"500px", width:"70%"}}>
          <h3 className="fs-5 text-light">Bachelors of Computer Applications in Data Science (BCA)</h3>
          <p className="text-info mb-2">Assam Down Town University University · Nov 2021 – July 2024</p>
          <p>CGPA : 9.05 / 10</p>
        </div>

        <div className="mb-4 p-3 pb-0 mx-auto rounded border text-center" style = {{maxWidth:"500px", width:"70%"}}>
          <h3 className="fs-5 text-light">Higher Secondary (Class XII) - Science</h3>
          <p className="text-info mb-2">Shrimanta Shankar Academy · April 2020 – Mar 2021</p>
          <p>Percentage : 88.16%</p>
        </div>

        <div className="mb-4  p-3 pb-0  mx-auto rounded border text-center" style = {{maxWidth:"500px", width:"70%"}}>
          <h3 className="fs-5 text-light">Secondary (Class X)</h3>
          <p className="text-info mb-2">SAI RNS ACADEMY · April 2018 – Mar 2019</p>
          <p>Percentage : 91.5%</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
