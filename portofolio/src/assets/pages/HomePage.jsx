import { useState, useEffect } from "react";
import React from "react";
import Thermometer from "../components/Thermometer";
import TodoList from "../components/TodoList";

const HomePage = () => {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  //   Fungsi untuk menampilkan waktu real-time
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0"); // January is 0!
      const year = now.getFullYear();

      const timeString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
      setTime(timeString);
    };

    // Memperbarui jam setiap detik
    const intervalId = setInterval(updateClock, 1000);

    // Memanggil fungsi updateClock sekali untuk inisialisasi
    updateClock();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main>
        <section className="jumbotron bg-info container-fluid py-3">
          <div className="row align-items-center">
            <div className="col-md-6 p-5">
              <h1
                className="fw-bold"
                style={{ fontFamily: "Playfair Display" }}
              >
                Ahmad Fauzi
              </h1>
              <p style={{ fontFamily: "Playfair Display" }}>
                Hello, my name is Ahmad Fauzi. I'm 18 years old. I live in
                Bogor, Indonesia. I'm a student at SMK Negeri 1 Bogor. I'm
                interested in Web Development.
              </p>
              <div className="flex gap-5">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Contact Info
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="FB: ahmadfauzi1203"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="IG: @aziiee22"
                >
                  <i className="fa-brands fa-instagram"></i>
                </button>
              </div>
              <div className="clock fw-bold fs-1" id="clock"></div>
            </div>
            <div className="col-md-6">
              <img
                src="https://ahmadfauzi1203.github.io/img/avatar.jpg"
                alt="Ahmad Fauzi"
                className="img-thumbnail w-50 mx-auto d-block"
              />
            </div>
          </div>
        </section>

        {/* Project */}
        <section id="project" className="mt-5">
          <h1
            className="text-center fw-bold"
            style={{ fontFamily: "Playfair Display" }}
          >
            My Project
          </h1>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://cdn.dribbble.com/userupload/7414924/file/original-68f21298b449461b788d930bb97d9675.jpg"
                  className="d-block w-100 object-cover"
                  alt="App"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.dribbble.com/userupload/8314555/file/original-461a270720f1cc20f16bb1e4f33211db.png"
                  className="d-block w-100 object-cover"
                  alt="web"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.dribbble.com/userupload/9000437/file/original-05ce7878ecc282d0bdbc476f002b6087.png"
                  className="d-block w-100 object-fit-cover"
                  alt="web"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* Thermometer */}
        <Thermometer />

        {/* Todo List */}
        <TodoList />

        {/* Modal */}
        <div className="modal" tabindex="-1" id="exampleModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-info">
                <h5 className="modal-title">Info Contact</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Email: ahmadfauzi12346@gmail.com</p>
                <p>Telephone: 08123456789</p>
                <p>Address: Jl. Kebon Jeruk No. 10</p>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
