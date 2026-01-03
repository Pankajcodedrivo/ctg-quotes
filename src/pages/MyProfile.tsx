import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import edit from "../assets/images/edit-wh.svg"
import CircleProgress from "../components/CircleProgress";
import plus from "../assets/images/plus-blue.svg"
import home from "../assets/images/home.svg"
import vehicle from "../assets/images/vehicle.svg"
import minusIcon from "../assets/images/minus.svg"
import DashboardFooter from "../components/DashboardFooter";

const MyProfile = () => {
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
                        <h3>My Profile</h3>
                        <p>Manage your family’s insurance connections and policy progress in one place. All profiles must be completed before shopping can begin. </p>
                    </div>
                    <div className="dash-btn">
                        <button type="button" className="btn active">Start New Quote</button>
                        <button type="button" className="btn">Edit Household</button>
                    </div>
                    <div className="member-box">
                        <div className="dash-hdr">
                            <h3 className="mb-0 black">Members</h3>
                        </div>
                        <div className="row g-6">
                            <div className="col-xl-3 col-sm-6">
                                <div className="member-box-innr">
                                    <span className="minus-icon"><img src={minusIcon} alt="" /></span>
                                    <div className="mb-4">
                                        <h5>Main Insured</h5>
                                        <h4>Carlos</h4>
                                    </div>
                                    <div className="progress-innr">
                                        <CircleProgress value={100} />
                                    </div>
                                    <div className="member-box-innr-btm mt-4">
                                        <button type="button" className="edit"><img src={edit} alt="" /></button>
                                        <button type="button" className="btn">View Profile</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="member-box-innr">
                                    <span className="minus-icon"><img src={minusIcon} alt="" /></span>
                                    <div className="mb-4">
                                        <h4>Selena</h4>
                                    </div>
                                    <div className="progress-innr">
                                        <CircleProgress value={80} />
                                    </div>
                                    <div className="member-box-innr-btm mt-4">
                                        <button type="button" className="btn">Continue</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="member-box-innr">
                                    <span className="minus-icon"><img src={minusIcon} alt="" /></span>
                                    <div className="mb-4">
                                        <h4>David</h4>
                                    </div>
                                    <div className="progress-innr">
                                        <CircleProgress value={100} />
                                    </div>
                                    <div className="member-box-innr-btm mt-4">
                                        <button type="button" className="btn">Completed</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="member-box-innr more">
                                    <span><img src={plus} alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dash-hdr">
                        <h3 className="mb-0 black">Properties</h3>
                    </div>
                    <div className="mb-32">
                        <div className="row g-6">
                            <div className="col-xxl-5">
                                <div className="cmn-box">
                                    <span className="minus-icon right"><img src={minusIcon} alt="" /></span>
                                    <div className="cmnbox-top">
                                        <div className="cmnbox-img">
                                            <img src={home} alt="" />
                                        </div>
                                        <div className="cmnbox-content">
                                            <h4>Primary Home</h4>
                                            <p>123 Main Street, Houston, TX 77002</p>
                                        </div>
                                    </div>
                                    <div className="cmnbox-bottom">
                                        <div className="cmnbox-bottom-left">
                                            <p>Profile 75% Complete</p>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "80%" }}
                                                    aria-valuenow={80}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="cmnbox-bottom-right">
                                            <button type="button" className="btn blue-btn">Edit Home</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-5">
                                <div className="cmn-box flex">
                                    <span><img src={plus} alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dash-hdr">
                        <h3 className="mb-0 black">Vehicles</h3>
                    </div>
                    <div className="row g-6">
                        <div className="col-xxl-5">
                            <div className="cmn-box">
                                <span className="minus-icon right"><img src={minusIcon} alt="" /></span>
                                <div className="cmnbox-top">
                                    <div className="cmnbox-img">
                                        <img src={vehicle} alt="" />
                                    </div>
                                    <div className="cmnbox-content">
                                        <h4 className="mb-0">2021 Ford F-150</h4>
                                    </div>
                                </div>
                                <div className="cmnbox-bottom">
                                    <div className="cmnbox-bottom-left">
                                        <p>Profile 75% Complete</p>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "80%" }}
                                                aria-valuenow={80}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="cmnbox-bottom-right">
                                        <button type="button" className="btn blue-btn">Edit Vehicle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5">
                            <div className="cmn-box">
                                <span className="minus-icon right"><img src={minusIcon} alt="" /></span>
                                <div className="cmnbox-top">
                                    <div className="cmnbox-img">
                                        <img src={vehicle} alt="" />
                                    </div>
                                    <div className="cmnbox-content">
                                        <h4 className="mb-0">2015 Dodge Ram</h4>
                                    </div>
                                </div>
                                <div className="cmnbox-bottom">
                                    <div className="cmnbox-bottom-left">
                                        <p>Profile 75% Complete</p>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "80%" }}
                                                aria-valuenow={80}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="cmnbox-bottom-right">
                                        <button type="button" className="btn blue-btn">Edit Vehicle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5">
                            <div className="cmn-box">
                                <span className="minus-icon right"><img src={minusIcon} alt="" /></span>
                                <div className="cmnbox-top">
                                    <div className="cmnbox-img">
                                        <img src={vehicle} alt="" />
                                    </div>
                                    <div className="cmnbox-content">
                                        <h4 className="mb-0">2018 Ford Fiesta</h4>
                                    </div>
                                </div>
                                <div className="cmnbox-bottom">
                                    <div className="cmnbox-bottom-left">
                                        <p>Profile 75% Complete</p>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "80%" }}
                                                aria-valuenow={80}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="cmnbox-bottom-right">
                                        <button type="button" className="btn blue-btn">Edit Vehicle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5">
                            <div className="cmn-box flex">
                                <span><img src={plus} alt="" /></span>
                            </div>
                        </div>
                        <div className="col-xxl-5">
                            <div className="cmn-box">
                                <span className="minus-icon edit"><img src={edit} alt="" /></span>
                                <div className="cmnbox-top">
                                    <div className="cmnbox-img">
                                        <img src={vehicle} alt="" />
                                    </div>
                                    <div className="cmnbox-content">
                                        <h4 className="mb-0">2018 Ford Fiesta</h4>
                                    </div>
                                </div>
                                <div className="cmnbox-bottom">
                                    <div className="cmnbox-bottom-left">
                                        <p>Profile 75% Complete</p>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "80%" }}
                                                aria-valuenow={80}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="cmnbox-bottom-right">
                                        <button type="button" className="btn blue-btn">Edit Vehicle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5">
                            <div className="cmn-box flex">
                                <span><img src={plus} alt="" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyProfile;
