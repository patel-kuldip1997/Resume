import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_pvz11qi';
    const templateID = 'template_biu7n0h';
    const userID = 'IlVwmCyU8Dhm9Xa2Q';

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          setStatus('❌ Failed to send message. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    
    <section className="py-5" id="contact">
      <div className="container">
        <h1 className="text-center mb-4">Contact Me</h1>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="row g-3"> 
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control border-0 bg-secondary"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control border-0 bg-secondary"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control border-0 bg-secondary"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control border-0 bg-secondary"
                  id="message"
                  name="message"
                  placeholder="Leave a message here"
                  style={{ height: '200px' }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary w-100 py-3"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </form>
        {status && <div className="alert alert-info mt-4">{status}</div>}
      </div>
    </section>
  );
};

export default Contact;
