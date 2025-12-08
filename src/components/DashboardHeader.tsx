import { Link } from "react-router-dom";
import innerLogo from "../assets/images/inner-logo.svg"
import notificationIcon from "../assets/images/notification-icon.svg"
import profile from "../assets/images/profile-img.png"
import list from "../assets/images/list.svg"
const DashboardHeader = () => {
    return (
        <div className="dashboard-header">
            <div className="dashboard-header-left">
                <img src={innerLogo} alt="" />
            </div>
            <div className="dashboard-header-right">
                <div className="search-box">
                    <input className="search-input" type="text" placeholder="Search for something ..." />
                </div>
                <div className="select-box">
                    <select name="" id="">
                        <option value="">Paused</option>
                        <option value="">Paused</option>
                        <option value="">Paused</option>
                    </select>
                </div>
                <Link to="/"className="notification-icon">
                    <img src={notificationIcon} alt="" />
                </Link>
                <div className="profile dropdown">
                    <Link to="/" className="profile-img dropdown-toggle" data-bs-toggle="dropdown"><span><img src={profile} alt="" /></span>Profile</Link>
                    <div className="dropdown-menu">
                        <ul>
                            <li>
                                <Link to="/">
                                    <span><img src={list} alt="" /></span>
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span><img src={list} alt="" /></span>
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span><img src={list} alt="" /></span>
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span><img src={list} alt="" /></span>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashboardHeader;