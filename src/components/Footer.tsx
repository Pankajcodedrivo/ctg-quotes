import { Link } from "react-router-dom";
import ctgLogo from "../assets/images/ctglogo.svg"
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-top">
                <Link to="/" className="footer-logo"><img src={ctgLogo} alt="" /></Link>    
                <ul className="footer-menu">
                    <li>
                        <Link to="/">Home</Link>    
                    </li>
                    <li>
                        <Link to="/">How it works</Link>    
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>© 2026 <span>CTG Quotes</span>. All rights reserved.</p>
                <ul>
                    <li>
                        <Link to="/">Privacy Policy</Link>       
                    </li>
                    <li><Link to="/">Terms & Conditions</Link> </li>
                </ul>
            </div>
        </div>
    </div>
  )
};

export default Footer;
