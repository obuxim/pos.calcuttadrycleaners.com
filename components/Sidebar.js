import React from "react";

const Sidebar = () => {
  return (
    <nav
      className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="scrollbar-inner">
        {/* Brand */}
        <div className="sidenav-header  align-items-center">
          <a className="navbar-brand" href="/">
            <img
              src="/assets/img/brand/blue.png"
              className="navbar-brand-img"
              alt="CDC"
            />
          </a>
        </div>
        <div className="navbar-inner">
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* Nav items */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="dashboard">
                  <i className="ni ni-tv-2 text-primary" />
                  <span className="nav-link-text">Dashboard</span>
                </a>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-3" />
            {/* Heading */}
            <h6 className="navbar-heading p-0 text-muted">
              <span className="docs-normal">Developer</span>
            </h6>
            {/* Navigation */}
            <ul className="navbar-nav mb-md-3">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://linkedin.com/in/obuxim"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                  <span className="nav-link-text">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
