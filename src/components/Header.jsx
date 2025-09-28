import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const lower = query.toLowerCase();

    if (lower.includes("home")) navigate("/");
    else if (lower.includes("team")) navigate("/team");
    else if (lower.includes("contact")) navigate("/contact");
    else if (lower.includes("about")) navigate("/about");
    else navigate("/notfound");

    setQuery("");
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark shadow-sm gj-navbar">
      <div className="container d-flex align-items-center">
        {/* Brand Name */}
        <NavLink className="navbar-brand fw-bold" to="/">
          JayaGemilang
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3 align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team">
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>

          {/* Search Bar */}
          <form
            className="d-flex align-items-center position-relative ms-3"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              className="form-control search-input me-2"
              placeholder="Cari halaman..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-warning search-btn" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
