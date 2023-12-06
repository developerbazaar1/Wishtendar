import { Link } from "react-router-dom/dist";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <ul className="footer-ul footer-fonts">
          <li><Link to="/about" type="button" className="link-text">About</Link> </li>
          <li> <Link to="/helpcenter" type="button" className="link-text">Help Center</Link> </li>
          <li> <Link to="/terms-of-services" type="button" className="link-text">Terms of Service</Link> </li>
          <li> <Link to="/privacypolicy" type="button" className="link-text">Privacy Policy</Link></li>
          <li> <Link to="/cookie-policy" type="button" className="link-text">Cookie Policy</Link></li>
          <li> <Link to="/how-it-works" type="button" className="link-text">How its works</Link> </li>
          <li> <Link to="/faq" type="button" className="link-text">FAQ</Link></li>
          <li><span className="link-text">© 2021 Fight Companion LLC.</span></li>
          {/* <li>How it works</li> */}
        </ul>
      </div>
    </>
  );
};

export default Footer;
