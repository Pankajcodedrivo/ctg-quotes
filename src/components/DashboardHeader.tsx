interface DashboardHeaderProps {
    toggleMenu: () => void;
}
import { Link } from "react-router-dom";
import innerLogo from "../assets/images/inner-logo.svg"
import notificationIcon from "../assets/images/notification-icon.svg"
import profile from "../assets/images/profile-img.png"
import menu from "../assets/images/menu.png"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/authSlice";
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ toggleMenu }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function logoutHandler() {
        dispatch(logOut());
        localStorage.clear();
        navigate("/login");
    }
    return (
        <div className="dashboard-header">
            <div className="dashboard-header-left">
                <img src={innerLogo} alt="" />
            </div>
            <div className="dashboard-header-right">
                {/* <span className="search-icon"><img src={searchIcon} alt="" /></span> */}
                <div className="search-box">
                    <input className="search-input" type="text" placeholder="Search for something ..." />
                </div>
                <div className="top-area">
                    <div className="select-box">
                        <select name="" id="">
                            <option value="">Paused</option>
                            <option value="">Paused</option>
                            <option value="">Paused</option>
                        </select>
                    </div>
                    <Link to="/notifications" className="notification-icon">
                        <img src={notificationIcon} alt="" />
                    </Link>
                    <div className="profile dropdown">
                        <Link to="/" className="profile-img dropdown-toggle" data-bs-toggle="dropdown"><span><img src={profile} alt="" /></span>Profile</Link>
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <Link to="/my-account">
                                        My Account
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/security">
                                        Security
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/settings">
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={logoutHandler}>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-bar d-flex d-md-none" onClick={toggleMenu}>
                        <img src={menu} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashboardHeader;