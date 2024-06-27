import React, { useState } from "react";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const validated = (event) => {
    event.preventDefault();
    if (telephone.length !== 12) {
      alert("Telephone number must be 12 digits");
    } else {
      setSuccessMessage(true);
    }
  };

  return (
    <>
      <section id="form-message">
        <div className="container bg-info rounded-2 py-3">
          <h1
            className="text-center fw-bold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Contact Me
          </h1>
          <form onSubmit={validated} id="Myform">
            <div className="mb-3">
              <label htmlFor="full-name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="full-name"
                placeholder="Full Name..."
                className="form-control"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email..."
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telephone" className="form-label">
                Telephone
              </label>
              <input
                type="number"
                name="telephone"
                id="telephone"
                placeholder="Number Telephone..."
                className="form-control"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                placeholder="Create a message"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
            {successMessage && (
              <p
                id="successMessage"
                style={{ fontWeight: "bold", color: "green" }}
              >
                Success sending
              </p>
            )}
          </form>
        </div>
      </section>

      <section id="table-output">
        <div className="container">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ahmad Fauzi</td>
                <td>ahmadfauzi12346@gmail.com</td>
                <td>081234567890</td>
                <td>Hi, I am Ahmad Fauzi</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Steven Heuay</td>
                <td>steven@gmail.com</td>
                <td>081234565590</td>
                <td>Hi, I am Steven Hueay</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
