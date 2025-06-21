import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  const projects = [
    {
      title: "Fake Amazon Product Review Detection",
      description:
        "A web app that detects fake reviews on Amazon products to help customers avoid deceptive feedback and make informed buying decisions",
      image: "/images/Project_1.png",
      link: "https://github.com/debangan-deb/Fake-Amazon-Product-Review-Detection",
    },
     {
      title: "Mini E-Commerce Website",
      description:
        "ShopNext is a simple full-stack shopping website featuring category-based product browsing, user authentication, cart and checkout with payment options, and customer support integration.",
      image: "/images/Project_2.png",
      link: "https://github.com/debangan-deb/FUTURE_FS_02",
    }
  ];

  return (
    <section className="py-5 text-center">
      <div className="mx-auto px-3" style={{ maxWidth: '500px', width: '70%'}}>
       
        <h2 className="text-primary border-bottom border-primary mb-4 d-inline-block" >
          Projects
        </h2>
        <div >
          {projects.map((proj, index) => (
            <div key={index}>
              <div
                className="card border-0 "
                style={{
                  backgroundColor: "#161b22",
                  marginBottom : "50px",  
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="card-img-top"
                  style={{
                    height: "160px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                  }}
                />
                <div className="card-body">
                  <h5 style={{ color: "#c9d1d9" }}>
                    {proj.title}
                  </h5>


                  <p style={{ color: "#58a6ff" }}>
                    {proj.description}
                  </p>
                  <a
                    href={proj.link}
                    className="btn btn-primary text-white"
                  >
                    View →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
