import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import arrow from "../assets/images/long-arrow.svg"

const MyAccount = () => {
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
                        <h3>My Account</h3>
                        <p className="font-16">Manage your personal details.</p>
                    </div>
                    <div className="shadow-box blue-border mb-4 my-account">
                        <h5>Profile Summary</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">First Name</label>
                                    <input type="text" className="form-control" placeholder="Selena" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Ram" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Date of Birth</label>
                                    <input type="date" className="form-control" placeholder="9/**/2025" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Email Address</label>
                                    <input type="email" className="form-control" placeholder="selena.ram@ctg-quotes.com" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="(555) 123-4567" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Home Address</label>
                                    <input type="text" className="form-control" placeholder="123 Main Street, Springfield, IL 62701, USA" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn green-btn">Update <span><img src={arrow} alt="" /></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-box blue-border my-account">
                        <h5>Driver License</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Driver License Number</label>
                                    <input type="text" className="form-control" placeholder="*********12" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn green-btn">Request Update Driver License <span><img src={arrow} alt="" /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyAccount;
