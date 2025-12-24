import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";

const Settings = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr mb-0">
                        <h3>Settings</h3>
                        <p className="font-16">The settings page allows users to manage notifications, communication preferences, language, theme, and quick links. This page is strictly for user preferences, not visibility, mode selection, or profile details.</p>
                    </div>
                    
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Settings;
