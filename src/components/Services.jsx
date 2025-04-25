import React from 'react';

const Services = () => {
  return (
    <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="title pb-3 mb-5">Services</h1>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="service-item">
            <i className="fa fa-2x fa-laptop-code mx-auto mb-4"></i>
            <h5 className="mb-2">Web Design</h5>
            <p className="mb-0">
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item">
            <i className="fab fa-2x fa-android mx-auto mb-4"></i>
            <h5 className="mb-2">Apps Development</h5>
            <p className="mb-0">
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item">
            <i className="fa fa-2x fa-search mx-auto mb-4"></i>
            <h5 className="mb-2">SEO</h5>
            <p className="mb-0">
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item">
            <i className="fa fa-2x fa-edit mx-auto mb-4"></i>
            <h5 className="mb-2">Content Creating</h5>
            <p className="mb-0">
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
