import React from 'react';

const About = () => {
  return (
    <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="title pb-3 mb-5">About Me</h1>
      <p>
      I’m a dedicated IT professional with over 5.8 years of experience in technical support, currently working on the client side. Passionate about learning and growing in the tech industry, I am actively transitioning into a Site Reliability Engineer (SRE) role. I’m also exploring modern web technologies, working on building responsive and creative portfolio projects using React.js, Tailwind CSS, and Framer Motion.
      <br />
      <br />
      With a strong interest in DevOps and automation, I’m steadily building skills in tools like Git and CI/CD, aiming to master the SRE domain. I thrive in collaborative environments and enjoy solving real-world problems through technology.
      </p>
      <div className="row mb-4">
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Name:</span> Kuldipkumar Patel
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Birthday:</span> 19th August 1997
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Degree:</span> Master
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Experience:</span> 6 Years
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Phone:</span> +91-78743 69355
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Email:</span> patelkuldip1997@gmail.com
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Address:</span> Ahmedabad
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Freelance:</span> Available
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-4 col-lg-6 col-xl-4">
          <div className="d-flex bg-secondary p-4">
            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">06</h1>
            <div className="ps-3">
              <p className="mb-0">Years of</p>
              <h5 className="mb-0">Experience</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-xl-4">
          <div className="d-flex bg-secondary p-4">
            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">01</h1>
            <div className="ps-3">
              <p className="mb-0">Happy</p>
              <h5 className="mb-0">Clients</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-xl-4">
          <div className="d-flex bg-secondary p-4">
            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">03</h1>
            <div className="ps-3">
              <p className="mb-0">Complete</p>
              <h5 className="mb-0">Projects</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
