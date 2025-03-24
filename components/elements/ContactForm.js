"use client";
import { useState } from "react";

export default function ContactForm({ includePhone = true, includeSubject = true }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      error: false,
      success: false,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      setStatus({
        submitted: true,
        submitting: false,
        error: false,
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        submitted: true,
        submitting: false,
        error: true,
        success: false,
        message: error.message || "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="contact-form">
      {status.success ? (
        <div className="success-message">
          <h4 className="text-center mb-20">{status.message}</h4>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row clearfix">
            <div className="form-group col-md-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {includePhone && (
              <div className="form-group col-md-12">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {includeSubject && (
              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="form-group col-md-12">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group col-md-12 text-center">
              <button
                className="btn-1 btn-small"
                type="submit"
                disabled={status.submitting}
              >
                {status.submitting ? "Sending..." : "Send Message"}{" "}
                <i className="flaticon-right-arrow-1"></i>
                <span></span>
              </button>
            </div>

            {status.error && (
              <div className="col-md-12 mt-20">
                <p className="error-message text-center">{status.message}</p>
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
}