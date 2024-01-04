import { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_API_KEY } from "../../utils/recaptcha/recaptcha.utils";

import "./contact.styles.scss";

const Contact = () => {
  const [recaptcha, setRecaptcha] = useState("");
  const [isVerified, setIsVerified] = useState("");

  const onChange = (value) => {
    setRecaptcha(value);
    if (value) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isVerified) {
  //     console.log(name, email, message);
  //   }
  // };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="container">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <div className="contact-info">
          <p>Beak & Snout Apothecary</p>
          <p>545 Hooksett Rd Unit #15</p>
          <p>Manchester, NH 03104</p>
            <p>
              <strong>Email:</strong>beakandsnoutco@gmail.com
            </p>
          </div>
        </div>
        <div className="contact-right">
          <h2>For all inquiries:</h2>
          <p>Send us a message and we'll get back to you as soon as we can! </p>
          <div className="w-form">
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input
                className="w-input"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                className="w-input"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                className="w-input"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" onClick={handleSubmit} className="w-button btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
