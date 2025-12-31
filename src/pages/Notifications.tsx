import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import arrow from "../assets/images/long-arrow.svg"
import NotificationBox from "../components/NotificationBox";

const Notifications = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="notification-hdr">
                        <div className="dash-hdr mb-0">
                            <h3>Notifications</h3>
                            <p className="font-16">Stay updated with the latest alerts, reminders, and actions.</p>
                        </div>
                        <button type="button" className="btn red-btn sm mb-w-100">Delete All <span><img src={arrow} alt="" /></span></button>
                    </div>
                    <div className="notification-box-innr">
                        <NotificationBox />
                        <NotificationBox />
                        <NotificationBox />
                        <NotificationBox />
                        <NotificationBox />
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Notifications;
