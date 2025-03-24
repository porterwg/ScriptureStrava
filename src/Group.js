"use client";
import React from "react";

function UnjoinedGroup({ onJoinClick, onProfileClick, onImageClick }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        width: "100%",
        maxWidth: "600px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {/* First Image */}
      <img
        src="/img/jesus.png"
        alt="124th Ward"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "20px",
          cursor: "pointer", // Indicates it's clickable
        }}
        onClick={onImageClick} // Add functionality later
      />

      {/* Ward Title */}
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#333",
          margin: "0 0 10px 0",
        }}
      >
        124th Ward
      </h1>

      {/* Ward Description */}
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          margin: "0 0 20px 0",
        }}
      >
        Our ward group!
      </p>

      {/* Join Button */}
      <button
        style={{
          backgroundColor: "#87CEEB",
          color: "white",
          fontSize: "1.2rem",
          padding: "10px 20px",
          border: "none",
          borderRadius: "25px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#6CB4EE")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#87CEEB")}
        onClick={onJoinClick} // Add functionality later
      >
        Join
      </button>

      {/* Profile Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          width: "100%",
          maxWidth: "600px",
          cursor: "pointer", // Indicates it's clickable
        }}
        onClick={onProfileClick} // Add functionality later
      >
        <img
          src="/img/waffles.jpg"
          alt="Porter Graham"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <span
          style={{
            fontSize: "1.1rem",
            color: "#333",
          }}
        >
          Porter Graham
        </span>
      </div>

      {/* Third Image */}
      <img
        src="/img/familyphoto.jpg"
        alt="Ward Activity"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          marginTop: "20px",
          borderRadius: "10px",
          cursor: "pointer", // Indicates it's clickable
        }}
        onClick={onImageClick} // Add functionality later
      />
    </div>
  );
}

export default UnjoinedGroup;