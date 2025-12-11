import { Link } from "react-router-dom";
import SubFooter from "../../../../components/SubFooter";
import SubHeader from "../../../../components/SubHeader";
import LeftPanelRegister from "../../../../components/LeftPanelRegister";
import infoIcon from "../../../../assets/images/info-icon-1.svg"
import tick from "../../../../assets/images/tick.svg"
import eye from "../../../../assets/images/eye-off.svg"
import rightArrow from "../../../../assets/images/right-arrow.svg"
const Step1 = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="Personal Information" subtitle="" img={infoIcon} />
            <div className="right-panel register">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                        <ul className="step-list">
                            <li className="active">
                                <span><img src={tick} alt="" /></span>
                                <p>Start</p>
                            </li>
                            <li className="completed">
                                <span><img src={tick} alt="" /></span>
                                <p>Step 1</p>
                            </li>
                            <li>
                                <span><img src={tick} alt="" /></span>
                                <p>Step 2</p>
                            </li>
                            <li>
                                <span><img src={tick} alt="" /></span>
                                <p>Step 3</p>
                            </li>
                            <li>
                                <span><img src={tick} alt="" /></span>
                                <p>Step 4</p>
                            </li>
                        </ul>
                        <div className="auth-form">
                            <div className="mb-40">
                                <div className="mb-4">
                                    <h4>Let’s Get Started</h4>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label className="form-label float">First Name <span>(as it appears on Driver License)*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label className="form-label float">Last Name <span>(as it appears on Driver License)*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label className="form-label float">Birthday <span>(DOB)*</span></label>
                                            <input type="date" className="form-control" placeholder="Select DOB" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <p className="form-txt">You must be 18 or older to create an account. If you’re under 18, please have the main insured add you manually.</p>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">Marital Status</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Status</option>
                                                <option value="1">Select Status</option>
                                                <option value="1">Select Status</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">Gender <span>(as it appears on Driver License)*</span></label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Gender</option>
                                                <option value="1">Select Gender</option>
                                                <option value="1">Select Gender</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-40">
                                <div className="mb-4">
                                    <h4>Driver Licence Information</h4>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label className="form-label float">What kind of driver’s license do you have?*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select option</option>
                                                <option value="1">Select option</option>
                                                <option value="1">Select option</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label className="form-label float">How many years have you been licensed?*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select option</option>
                                                <option value="1">Select option</option>
                                                <option value="1">Select option</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label float">Driver’s License State *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select State</option>
                                                <option value="1">Select State</option>
                                                <option value="1">Select State</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label float">Driver’s Licence Number *</label>
                                            <input type="text" className="form-control" placeholder="Enter Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Has your driver’s license been suspended in the last 5 years?*</label>
                                        <ul className="radio-list">
                                            <li>
                                                <label className="radio-container">Yes
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="radio-container">No
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <h4>Login & Contact Information</h4>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label className="form-label float">Email Address *</label>
                                            <div className="verify-innr">
                                                <input type="email" className="form-control" placeholder="Enter Email" />
                                                <button className="btn btn-primary" type="submit">Verify</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label className="form-label float">Phone Number *</label>
                                            <div className="verify-innr">
                                                <input type="tel" className="form-control" placeholder="Enter Number" />
                                                <button className="btn btn-primary" type="submit">Verify</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">Create Password *</label>
                                            <div className="password">
                                                <input type="password" className="form-control" placeholder="Enter Password" />
                                                <span className="password-icon">
                                                    <img src={eye} alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">Re-enter Password*</label>
                                            <div className="password">
                                                <input type="password" className="form-control" placeholder="Re-enter Password" />
                                                <span className="password-icon">
                                                    <img src={eye} alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-end mt-40">
                            <button type="submit" className="btn btn-primary">Save & Continue <span><img src={rightArrow} alt="" /></span></button>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
        </section>
    )
};

export default Step1;