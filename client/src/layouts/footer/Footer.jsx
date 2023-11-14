import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-widget">
          <h3>Categories</h3>
          <div className="footer-menu">
            <Link className="link" to="/">
              {" "}
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              {" "}
              Data
            </Link>
            <Link className="link" to="/">
              {" "}
              Photography
            </Link>
            <Link className="link" to="/">
              {" "}
              AI Services
            </Link>
          </div>
        </div>
        <div className="footer-widget"></div>
        <div className="footer-widget"></div>
        <div className="footer-widget"></div>
      </div>
    </footer>
  );
};

export default Footer;
