import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import home from "../assets/images/home-icon.svg"
import profileMale from "../assets/images/avtar-male.png"
import profileFemale from "../assets/images/avtar-female.png"
import profileImg from "../assets/images/avtar-lg.png"
import eye from "../assets/images/eye.svg"
import upload from "../assets/images/upload.svg"
import edit from "../assets/images/edit-sm.svg"

const FamilyCircle = () => {
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
                        <h3>Family Circle</h3>
                        <p>View and manage your household members below</p>
                    </div>
                    <div className="family-circle-top">
                        <div className="family-circle-top-left">
                            <h4><span><img src={home} alt="" /></span>Family Circle : Carlos’s Household</h4>
                            <p>Total members : 5</p>
                        </div>
                        <button className="btn blue-btn" type="button">Add Member</button>
                    </div>
                    <div className="family-circle-bottom">
                        <div className="family-circle-box">
                            <div className="row align-items-center">
                                <div className="col-md-3 inner-box">
                                    <div className="family-circle-box-wrapper box-1">
                                        <div className="family-circle-box-top">
                                            <figure><img src={profileMale} alt="" /></figure>
                                            <div className="family-circle-box-hover">
                                                <button type="button"><img src={eye} alt="" /></button>
                                                <button type="button"><img src={upload} alt="" /></button>
                                                <button type="button"><img src={edit} alt="" /></button>
                                            </div>
                                        </div>
                                        <div className="family-circle-box-bottom">
                                            <h5>David</h5>
                                            <span className="badge">Linked Account</span>
                                        </div>
                                    </div>
                                    <div className="family-circle-box-wrapper box-2">
                                        <div className="family-circle-box-top">
                                            <figure><img src={profileFemale} alt="" /></figure>
                                            <div className="family-circle-box-hover">
                                                <button type="button"><img src={eye} alt="" /></button>
                                                <button type="button"><img src={upload} alt="" /></button>
                                                <button type="button"><img src={edit} alt="" /></button>
                                            </div>
                                        </div>
                                        <div className="family-circle-box-bottom">
                                            <h5>Selena</h5>
                                            <span className="badge">Added Manually</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 inner-box-2">
                                    <figure className="pro-img"><img src={profileImg} alt="" /></figure>
                                    <div className="pro-txt">
                                        <h5>You</h5>
                                        <p>Main Insured</p>
                                    </div>
                                </div>
                                <div className="col-md-3 inner-box">
                                    <div className="family-circle-box-wrapper box-3">
                                        <div className="family-circle-box-top">
                                            <figure><img src={profileMale} alt="" /></figure>
                                            <div className="family-circle-box-hover">
                                                <button type="button"><img src={eye} alt="" /></button>
                                                <button type="button"><img src={upload} alt="" /></button>
                                                <button type="button"><img src={edit} alt="" /></button>
                                            </div>
                                        </div>
                                        <div className="family-circle-box-bottom">
                                            <h5>Carlos</h5>
                                            <span className="badge">Linked Account</span>
                                        </div>
                                    </div>
                                    <div className="family-circle-box-wrapper box-4">
                                        <div className="family-circle-box-top">
                                            <figure><img src={profileMale} alt="" /></figure>
                                            <div className="family-circle-box-hover">
                                                <button type="button"><img src={eye} alt="" /></button>
                                                <button type="button"><img src={upload} alt="" /></button>
                                                <button type="button"><img src={edit} alt="" /></button>
                                            </div>
                                        </div>
                                        <div className="family-circle-box-bottom">
                                            <h5>Glenn</h5>
                                            <span className="badge pending">Pending Invite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default FamilyCircle;
