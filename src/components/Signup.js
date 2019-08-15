import React from 'react';

const Signup = () => {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">
              Have a vision? Let's talk about it!
            </h2>
          </div>

          <div className="col-md-9 mb-md-0 mb-5 mx-auto text-center">
            <form
              className="form"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label
                      htmlFor="name"
                      className="text-white font-weight-bold "
                    ></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label
                      htmlFor="email"
                      className="text-white font-weight-bold"
                    ></label>
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label
                      htmlFor="message"
                      className="text-white font-weight-bold mt-4"
                    ></label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control lg-textarea flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mx-auto mt-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
