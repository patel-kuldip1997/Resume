import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  { id: 1, category: 'first', img: 'assets/img/portfolio-1.jpg' },
  { id: 2, category: 'second', img: 'assets/img/portfolio-2.jpg' },
  { id: 3, category: 'first', img: 'assets/img/portfolio-3.jpg' },
  { id: 4, category: 'second', img: 'assets/img/portfolio-4.jpg' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('*');

  const filteredItems =
    filter === '*' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-5 border-bottom">
      <motion.h1
        className="title pb-3 mb-5 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.10 }}
      >
        Portfolio
      </motion.h1>

      <div className="text-center mb-4">
        <ul className="list-inline" id="portfolio-flters">
          <li
            className={`btn btn-secondary mx-1 ${filter === '*' ? 'active' : ''}`}
            onClick={() => setFilter('*')}
          >
            <i className="fa fa-star me-2"></i>All
          </li>
          <li
            className={`btn btn-secondary mx-1 ${filter === 'first' ? 'active' : ''}`}
            onClick={() => setFilter('first')}
          >
            <i className="fa fa-laptop-code me-2"></i>Design
          </li>
          <li
            className={`btn btn-secondary mx-1 ${filter === 'second' ? 'active' : ''}`}
            onClick={() => setFilter('second')}
          >
            <i className="fa fa-mobile-alt me-2"></i>Development
          </li>
        </ul>
      </div>

      <motion.div layout className="row portfolio-container">
        <AnimatePresence>
          {filteredItems.map(item => (
            <motion.div
              layout
              key={item.id}
              className="col-md-6 mb-4 portfolio-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="position-relative overflow-hidden mb-2">
                <img className="img-fluid w-100" src={item.img} alt={`Portfolio ${item.id}`} />
                <div className="portfolio-btn d-flex align-items-center justify-content-center">
                  <a href={item.img} data-lightbox="portfolio">
                    <i className="bi bi-plus text-light fs-3"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
