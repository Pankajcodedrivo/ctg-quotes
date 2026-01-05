import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import arrow from "../assets/images/long-arrow.svg"

const Support = () => {
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
                        <h3>Support</h3>
                        <p className="font-16">Get help, find answers, and connect with our team.</p>
                    </div>
                    <div className="cmn-box h-auto p-40">
                        <h4 className="s-hdr">Contact us</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Full Name *</label>
                                    <input type="text" className="form-control" placeholder="Selena Ram" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Email Address *</label>
                                    <input type="email" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Phone  <span>(optional)</span></label>
                                    <input type="tel" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label float">Message<span>(Tell us what you need help with.)</span></label>
                                    <textarea className="form-control" placeholder=""></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn green-btn mb-w-100">Submit <span><img src={arrow} alt="" /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Support;
