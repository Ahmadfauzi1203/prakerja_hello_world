import React from "react";
import { useState } from "react";

const Thermometer = () => {
  // Konversi Suhu Fahrenheit ke Celsius
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  const convertToFahrenheit = () => {
    const celsiusValue = ((fahrenheit - 32) * 5) / 9;
    setCelsius(celsiusValue.toFixed(2));
  };

  return (
    <>
      <section
        id="thermometer"
        className="mt-5"
        style={{ background: "#06D001" }}
      >
        <div className="container rounded-2 py-3">
          <h1 id="title">Konversi Suhu Fahrenheit ke Celsius</h1>
          <label for="fahrenheit">Masukkan suhu dalam Fahrenheit:</label>
          <input
            type="number"
            id="fahrenheit"
            name="fahrenheit"
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
          />
          <button className="btn btn-primary" onClick={convertToFahrenheit}>
            Konversi
          </button>
          <p className="fw-bold" id="result">
            Hasil: {celsius}
          </p>
        </div>
      </section>
    </>
  );
};

export default Thermometer;
