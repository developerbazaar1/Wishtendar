import { Link } from "react-router-dom/dist";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <ul className="footer-ul footer-fonts">
          <li>
            <Link to="/about" type="button">
              About
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/helpcenter" type="button">
              Help Center
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/terms-of-services" type="button">
              Terms of Service
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/privacypolicy" type="button">
              Privacy Policy
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/cookie-policy" type="button">
              Cookie Policy
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/how-it-works" type="button">
              How its works
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/faq" type="button">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/">© 2021 Fight Companion LLC.</Link>
          </li>
          {/* <li>How it works</li> */}
        </ul>
      </div>
    </>
  );
};

export default Footer;
