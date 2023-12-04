import { Link } from "react-router-dom/dist";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <ul className="footer-ul footer-fonts">
          <li><Link to="/about" className="link-text">About</Link> </li>
          <li> <Link to="/helpcenter" className="link-text">Help Center</Link> </li>
          <li> <Link to="/terms-of-services" className="link-text">Terms of Service</Link> </li>
          <li> <Link to="/privacypolicy" className="link-text">Privacy Policy</Link></li>
          <li> <Link to="/cookie-policy" className="link-text">Cookie Policy</Link></li>
          <li> <Link to="/how-it-works" className="link-text">How its works</Link> </li>
          <li> <Link to="/faq" className="link-text">FAQ</Link></li>
          <li><span className="link-text">© 2021 Fight Companion LLC.</span></li>
          {/* <li>How it works</li> */}
        </ul>
      </div>
    </>
  );
};

export default Footer;
