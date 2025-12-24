import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import arrow from "../assets/images/long-arrow.svg"
import eye from "../assets/images/eye-off.svg"

const Security = () => {
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
                        <h3>Security</h3>
                        <p className="font-16">Manage your security settings with ease.</p>
                    </div>
                    <div className="shadow-box my-account">
                        <h5>Change Email</h5>
                        <div className="row align-items-end mb-4">
                            <div className="col-md-6">
                                <div className="form-group mb-0">
                                    <label className="form-label float">Email Address</label>
                                    <input type="email" className="form-control" placeholder="selena.ram@yahoo.com" />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn green-btn hg-60">Update <span><img src={arrow} alt="" /></span></button>
                            </div>
                        </div>
                        <h5>Change Password</h5>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="form-label float">Old Password *</label>
                                    <div className="password">
                                        <input type="password" className="form-control" placeholder="Enter Password" />
                                        <span className="password-icon">
                                            <img src={eye} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="form-label float">New Password *</label>
                                    <div className="password">
                                        <input type="password" className="form-control" placeholder="Enter Password" />
                                        <span className="password-icon">
                                            <img src={eye} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="form-label float">Confirm Password *</label>
                                    <div className="password">
                                        <input type="password" className="form-control" placeholder="Enter Password" />
                                        <span className="password-icon">
                                            <img src={eye} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn green-btn">Update <span><img src={arrow} alt="" /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Security;
