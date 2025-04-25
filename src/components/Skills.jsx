import React from 'react';

const Skills = () => {
  return (
    <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="title pb-3 mb-5">Skills</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">HTML</p>
              <p className="mb-2">95%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: '95%', animation: 'fillProgress 2s ease forwards' }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">CSS</p>
              <p className="mb-2">85%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: '85%', animation: 'fillProgress 2s ease forwards' }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">PHP</p>
              <p className="mb-2">90%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: '90%' , animation: 'fillProgress 2s ease forwards' }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Javascript</p>
              <p className="mb-2">60%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: '60%' , animation: 'fillProgress 2s ease forwards'}}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">React JS</p>
              <p className="mb-2">50%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: '50%', animation: 'fillProgress 2s ease forwards'}}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Wordpress</p>
              <p className="mb-2">60%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: '60%', animation: 'fillProgress 2s ease forwards' }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
