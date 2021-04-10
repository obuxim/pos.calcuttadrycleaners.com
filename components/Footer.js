import React from "react";

const Footer = () => {
  return (
    <footer className="footer pt-0">
      <div className="row align-items-center justify-content-lg-between">
        <div className="col-lg-6">
          <div className="copyright text-center  text-lg-left  text-muted">
            © 2020{" "}
            <a
              href="https://www.weabers.com"
              className="font-weight-bold ml-1"
              target="_blank"
            >
              Weabers
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="nav nav-footer justify-content-center justify-content-lg-end">
            <li className="nav-item">
              <a
                href="https://facebook.com/weabers"
                className="nav-link"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/company/weabersinc/"
                className="nav-link"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
