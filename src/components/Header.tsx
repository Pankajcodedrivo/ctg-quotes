import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-outr">
                    <Link to="/" className="logo-area"><img src={logo} alt="" /></Link>
                    <div className="hdr-btn-outr">
                        <Link to="/" className="btn btn-outline">Login</Link>
                        <Link to="/" className="btn red-btn">Create Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;