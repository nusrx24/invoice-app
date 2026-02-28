import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const mainLinks = [
  { label: "Home",      path: "/"          },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Invoices",  path: "/invoices"  },
  { label: "Clients",   path: "/clients"   },
  { label: "Settings",  path: "/settings"  },
];

const secondaryLinks = [
  { label: "About",   path: "/about"   },
  { label: "Contact", path: "/contact" },
];

const Menubar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container py-2">

        {/* ── Brand ── */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <Logo />
          <span
            className="fw-bolder fs-4"
            style={{ letterSpacing: "-0.5px", color: "#2c3e50" }}
          >
            QuickInvoice
          </span>
        </Link>

        {/* ── Mobile Toggle ── */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* ── Nav Links ── */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Main Links */}
          <ul className="navbar-nav mx-auto align-items-center gap-1">
            {mainLinks.map(({ label, path }) => (
              <li className="nav-item" key={label}>
                <Link
                  to={path}
                  className={`nav-link fw-medium px-3 py-2 rounded-3 ${
                    pathname === path
                      ? "active text-primary fw-semibold"
                      : "text-secondary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* ── CTA Button ── */}
            <li className="nav-item ms-2">
              <Link
                to="/new-invoice"
                className="btn btn-primary rounded-pill px-4 fw-semibold shadow-sm"
              >
                + New Invoice
              </Link>
            </li>
          </ul>

          {/* Secondary Links */}
          <ul className="navbar-nav align-items-center gap-1">
            {secondaryLinks.map(({ label, path }) => (
              <li className="nav-item" key={label}>
                <Link
                  to={path}
                  className={`nav-link fw-medium px-3 py-2 rounded-3 ${
                    pathname === path
                      ? "active text-primary fw-semibold"
                      : "text-secondary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Menubar;