import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";

const MyQuotesLoader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>Welcome back, Maria!</h3>
                    </div>
                    <h4 className="clr-3d">Your Current Quotes</h4>
                    <div className="quote-loader">
                        <div className="dots-loader">
                            <span></span><span></span><span></span><span></span>
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <p className="mt-4">Your Quotes are on their way</p>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyQuotesLoader;
