import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      style={{
        position: "relative",
        padding: "10px",
        borderBottom: "2px solid #ddd",
      }}
    >
      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          position: "relative",
          zIndex: 3, // Ensures the button stays on top
        }}
      >
        <Menu size={30} />
      </button>

      {/* Sliding Menu */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: "0",
          left: menuOpen ? "0" : "-250px", // Fully hides when closed
          width: "200px",
          height: "100vh",
          background: "white",
          boxShadow: menuOpen ? "2px 0 5px rgba(0,0,0,0.2)" : "none",
          paddingTop: "60px", // Prevent overlap with the hamburger
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center", // Center align text
          transition: "left 0.3s ease", // Smooth slide animation
          zIndex: 2,
        }}
      >
        <Link
          to="/posts"
          onClick={() => setMenuOpen(false)}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="/gospelLibrary"
          onClick={() => setMenuOpen(false)}
          className="nav-link"
        >
          Study
        </Link>
        <Link
          to="/groups"
          onClick={() => setMenuOpen(false)}
          className="nav-link"
        >
          Groups
        </Link>
        <Link
          to="/profile"
          onClick={() => setMenuOpen(false)}
          className="nav-link"
        >
          Profile
        </Link>
      </div>

      {/* Styles for hover effect */}
      <style>
        {`
                    .nav-link {
                        font-size: 18px;
                        font-weight: bold;
                        color: black;
                        text-decoration: none;
                        padding: 5px 0;
                        text-align: center;
                        position: relative;
                    }

                    .nav-link:hover {
                        text-decoration: underline;
                    }
                `}
      </style>
    </nav>
  );
};

export default Navbar;
