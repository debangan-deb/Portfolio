import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://portfolio-backend-yj7v.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const resData = await response.json();
        setError(resData.message || "Failed to send email.");
      }
    } catch (err) {
      setError("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 text-center">
      <div className="mx-auto" style={{ maxWidth: "600px", width: "75%" }}>
        <h2 className="mb-5 text-primary border-primary border-bottom d-inline-block">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="text-start  p-4 rounded border "
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
            ></textarea>
          </div>

          {error && <p className="text-danger">{error}</p>}

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-4 py-2 rounded-pill text-white"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm mx-2 "
                  ></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>

        <div
          className="position-fixed bottom-0 end-0 p-3 d-flex align-items-center"
        >
          <Toast
            bg="success"
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton>
              <strong className="text-black px-2">Thank You!</strong>
            </Toast.Header>
            <Toast.Body >
              Your message was sent successfully!
            </Toast.Body>
          </Toast>
        </div>
      </div>
    </section>
  );
};

export default Contact;
