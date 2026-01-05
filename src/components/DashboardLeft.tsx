interface DashboardLeftProps {
  isOpen: boolean;
  closeMenu: () => void;
}
import { Link } from "react-router-dom";
import dIcon1 from "../assets/images/d-icon-1.svg"
import dIcon2 from "../assets/images/d-icon-2.svg"
import dIcon3 from "../assets/images/d-icon-3.svg"
import dIcon4 from "../assets/images/d-icon-4.svg"
import dIcon5 from "../assets/images/d-icon-5.svg"
import dIcon6 from "../assets/images/d-icon-6.svg"
import dIcon7 from "../assets/images/d-icon-7.svg"
import close from "../assets/images/cross.svg"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/authSlice";

const DashboardLeft: React.FC<DashboardLeftProps> = ({ isOpen, closeMenu }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function logoutHandler() {
        dispatch(logOut());
        localStorage.clear();
        navigate("/login");
    }
    return (
        <div className={`dashboard-left ${isOpen ? "open" : ""}`}>
            <button className="close-icon" onClick={closeMenu}><img src={close} alt="" /></button>
            <ul className="mb-5">
                <li className="active">
                    <Link to="/my-quotes">
                        <span><img src={dIcon1} alt="" /></span>
                        My Quotes
                    </Link>
                </li>
                <li>
                    <Link to="/family-circle">
                        <span><img src={dIcon2} alt="" /></span>
                        Family Circle
                    </Link>
                </li>
                <li>
                    <Link to="/my-profile">
                        <span><img src={dIcon3} alt="" /></span>
                        My Profile
                    </Link>
                </li>
                <li>
                    <Link to="/messages">
                        <span><img src={dIcon4} alt="" /></span>
                        Messages <em>3</em>
                    </Link>
                </li>
                <li>
                    <Link to="/my-documents">
                        <span><img src={dIcon5} alt="" /></span>
                        My Documents
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/support">
                        <span><img src={dIcon6} alt="" /></span>
                        Support
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={logoutHandler}>
                        <span><img src={dIcon7} alt="" /></span>
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default DashboardLeft;