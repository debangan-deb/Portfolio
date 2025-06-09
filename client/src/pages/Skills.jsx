import React from "react";

const skillData = {
  "Programming Languages": ["Python", "Java", "C", "C++", "C#"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "TypeScript"],
  "Database": ["MySQL"],
  "Frameworks & Tools": [
    "React",
    "Bootstrap",
    "Tailwind",
    "Flask",
    "Node.js",
    "Express.js",
    "jQuery"
  ],
  "Version Control": ["Git", "GitHub"],
  "APIs": ["REST API"]
};

const Skills = () => {
  return (
    <section className="mt-3 mt-md-5 px-3 px-md-5 py-4">
      <div className="text-center text-md-start">
        <h2 className="mb-4 border-bottom border-primary text-primary d-inline-block">
          Skills
        </h2>

        <div className="d-grid gap-4">
          {Object.entries(skillData).map(([category, skills]) => (
            <div key={category}>
              <h5 className="mb-4 mb-md-3">{category}</h5>

              <div className="d-flex flex-column flex-md-row flex-wrap align-items-center align-items-md-start gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 my-2 rounded-pill border text-center"
                    style={{
                      width: "100%",
                      maxWidth: "180px"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
