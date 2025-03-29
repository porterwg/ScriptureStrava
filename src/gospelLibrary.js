import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GospelLibrary = () => {
  const [isStudying, setIsStudying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let timer = null;
    if (isStudying) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      setIntervalId(timer);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(timer);
  }, [isStudying]);

  useEffect(() => {
    // Disable scrolling on the entire page when this component is mounted
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when leaving this page
      document.body.style.overflow = "";
    };
  }, []);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 60px)",
      }}
    >
      {/* Scripture Study Iframe */}
      <iframe
        src="https://www.churchofjesuschrist.org/study?lang=eng"
        title="Scripture Study"
        width="100%"
        height="100%"
        style={{
          border: "none",
        }}
      ></iframe>

      {/* Floating Timer in Bottom Right */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#ffffffcc",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          zIndex: 9999,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        {!isStudying ? (
          <button
            onClick={() => {
              setIsStudying(true);
            }}
            style={{
              padding: "8px 12px",
              border: "none",
              backgroundColor: "#4caf50",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Start Study
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {formatTime(seconds)}
            </span>
            <button
              onClick={() => {
                setIsStudying(false);
                navigate("/poststudy");
              }}
              style={{
                padding: "6px 10px",
                border: "none",
                backgroundColor: "#f44336",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              End
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GospelLibrary;
