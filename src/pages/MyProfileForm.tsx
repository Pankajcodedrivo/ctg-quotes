import { useState } from "react";
import DashboardFooter from "../components/DashboardFooter";
import DashboardHeader from "../components/DashboardHeader";
import rightArrow from "../assets/images/right-arrow.svg"
const MyProfileForm = () => {
    const [_isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    // const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="my-profile-form">
                <div className="container sm">
                    <div className="my-profile-form-hdr">
                        <h3>Carlos Profile - <span>Main Insured</span></h3>
                    </div>
                    <div className="form-progress">
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
                        <p>80%</p>
                    </div>
                    <form action="">
                        <div className="form-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">Credit range</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select</option>
                                            <option value="1">Select</option>
                                            <option value="1">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">Highest level of education completed</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select</option>
                                            <option value="1">Select</option>
                                            <option value="1">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">Employment status</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select</option>
                                            <option value="1">Select</option>
                                            <option value="1">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">Occupation / Job Title</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select</option>
                                            <option value="1">Select</option>
                                            <option value="1">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="switch-otr mb-40">
                                        <p>Military affiliation</p>
                                        <label className="yes-no-switch">
                                            <input type="checkbox" />
                                            <span className="track">
                                                <span className="label yes">Yes</span>
                                                <span className="label no">No</span>
                                                <span className="thumb"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="switch-otr mb-40">
                                        <p>Would you like CTG to show bundle comparisons?</p>
                                        <label className="yes-no-switch">
                                            <input type="checkbox" />
                                            <span className="track">
                                                <span className="label yes">Yes</span>
                                                <span className="label no">No</span>
                                                <span className="thumb"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="switch-otr mb-40">
                                        <p>Would you like to enroll in paperless billing?</p>
                                        <label className="yes-no-switch">
                                            <input type="checkbox" />
                                            <span className="track">
                                                <span className="label yes">Yes</span>
                                                <span className="label no">No</span>
                                                <span className="thumb"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="switch-otr mb-40">
                                        <p>Would you like to set up automatic payments?</p>
                                        <label className="yes-no-switch">
                                            <input type="checkbox" />
                                            <span className="track">
                                                <span className="label yes">Yes</span>
                                                <span className="label no">No</span>
                                                <span className="thumb"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="switch-otr mb-40">
                                        <p>Would you like to participate in a Safe-Driver or Telematics Program (like Snapshot or Drivewise)?</p>
                                        <label className="yes-no-switch">
                                            <input type="checkbox" />
                                            <span className="track">
                                                <span className="label yes">Yes</span>
                                                <span className="label no">No</span>
                                                <span className="thumb"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="switch-otr mb-40">
                                        <p>Are there any full-time students under 25 on this policy?</p>
                                        <label className="yes-no-switch">
                                            <input type="checkbox" />
                                            <span className="track">
                                                <span className="label yes">Yes</span>
                                                <span className="label no">No</span>
                                                <span className="thumb"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4>Driver Licence Information</h4>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">First Name <span>(as it appears on Driver License)*</span></label>
                                        <input type="text" className="form-control" placeholder="Enter Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">Last Name <span>(as it appears on Driver License)*</span></label>
                                        <input type="text" className="form-control" placeholder="Enter Name" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label float">In the past 5 years (since November 2020), have you received any traffic tickets or violations?*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select</option>
                                            <option value="1">Select</option>
                                            <option value="1">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="form-label float">Year*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select</option>
                                            <option value="1">Select</option>
                                            <option value="1">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="form-label float">Make*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select</option>
                                            <option value="1">Select</option>
                                            <option value="1">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="form-label float">Model*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select</option>
                                            <option value="1">Select</option>
                                            <option value="1">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">What is the VIN number?</label>
                                        <input type="text" className="form-control" placeholder="WAUAUGFF5F1XXXXX" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <p className="form-txt mt-45">17 characters max, letters I and U not allowed</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h5 className="sub-title">Add Optional Coverages</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Add optional riders?</label>
                                    <ul className="checkbox-list">
                                        <li>
                                            <label className="checkbox-container">Accidental Death
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-container">Critical Illness
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-container">Disability Waiver
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-container">Child Term Rider
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="continue-btn-wrapper">
                            <p>Save & Come Back Later</p>
                            <button type="button" className="btn btn-primary">Continue <span><img src={rightArrow} alt="" /></span></button>
                        </div>
                    </form>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyProfileForm;