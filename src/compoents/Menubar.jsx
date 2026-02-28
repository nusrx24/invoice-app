import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./Menubar.css";

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
    <>
      <nav className="mb-nav">
        <div className="mb-inner">

          {/* ── Brand ── */}
          <Link to="/" className="mb-brand">
            <Logo />
            <span className="mb-brand-text">QuickInvoice From LapCircuit</span>
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="mb-main-links">
            {mainLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className={`mb-link ${pathname === path ? "mb-link-active" : ""}`}
                >
                  {label}
                  {pathname === path && <span className="mb-active-dot" />}
                </Link>
              </li>
            ))}

            <li>
              <Link to="/generate" className="mb-cta">
                <span>+</span> New Invoice
              </Link>
            </li>
          </ul>

          {/* ── Secondary Links ── */}
          <ul className="mb-secondary-links">
            {secondaryLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className={`mb-link mb-link-dim ${pathname === path ? "mb-link-active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Mobile Toggle ── */}
          <button
            className="mb-hamburger d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mbMobileMenu"
            aria-controls="mbMobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>

        </div>

        {/* ── Mobile Dropdown ── */}
        <div className="collapse" id="mbMobileMenu">
          <div className="mb-mobile-menu">
            <ul className="mb-mobile-links">
              {mainLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className={`mb-mobile-link ${pathname === path ? "mb-mobile-link-active" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {secondaryLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className={`mb-mobile-link mb-link-dim ${pathname === path ? "mb-mobile-link-active" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/generate" className="mb-cta mb-cta-mobile">
              <span>+</span> New Invoice
            </Link>
          </div>
        </div>

        {/* ── Bottom accent line ── */}
        <div className="mb-accent-line" />
      </nav>
    </>
  );
};

export default Menubar;