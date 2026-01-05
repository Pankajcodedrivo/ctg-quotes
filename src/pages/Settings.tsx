import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import SettingsBox from "../components/SettingsBox";
import rightArrow from "../assets/images/right-arrow.svg"

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
                    <div className="dash-hdr">
                        <h3>Settings</h3>
                        <p className="font-16">The settings page allows users to manage notifications, communication preferences, language, theme, and quick links. This page is strictly for user preferences, not visibility, mode selection, or profile details.</p>
                    </div>
                    <div className="shadow-box mb-4">
                        <div className="settings-hdr">
                            <h4>Notifications</h4>
                            <p>Use the switches below to control how you want to stay updated.</p>
                        </div>
                        <div className="settings-box-otr">
                            <SettingsBox title="Email Notifications" desc="Receive updates about quotes and uploaded documents" />
                            <SettingsBox title="Text Notifications" desc="Get SMS alerts for new quotes or document reminders" />
                            <SettingsBox title="New Quote Alerts" desc="Notified when carriers return new quote results" />
                            <SettingsBox title="Document Reminders" desc="Alerts for missing or incomplete uploads" />
                        </div>
                    </div>
                    <div className="shadow-box mb-4">
                        <div className="settings-hdr">
                            <h4>Communication Preferences</h4>
                            <p>Choose how and when our team can reach you.</p>
                        </div>
                        <div className="inner-shadow-box mb-4">
                            <p>Preferred Contact Method</p>
                            <div className="form-group mb-0 w-50">
                                <label className="form-label float">Contact Method</label>
                                <select name="" id="" className="form-control">
                                    <option value="1" disabled>Email</option>
                                    <option value="1">Email</option>
                                    <option value="1">Email</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-box mb-4">
                        <div className="settings-hdr">
                            <h4>Quick Links</h4>
                            <p>Access key tools quickly from here.</p>
                        </div>
                        <div className="inner-shadow-box pd-30 mb-4">
                            <ul className="settings-list">
                                <li>
                                    <Link to="/">Manage Account Security</Link>
                                </li>
                                <li>
                                    <Link to="/">Manage Documents</Link>
                                </li>
                                <li>
                                    <Link to="/">Log Out </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="shadow-box">
                        <div className="settings-hdr">
                            <h5>Delete Account</h5>
                            <p>You can delete your account anytime, but please note this action is permanent. All your information will be erased.</p>
                        </div>
                        <button type="button" className="btn btn-secondary style2 mb-w-100">Manage Account <span><img src={rightArrow} alt="" /></span> </button>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Settings;
