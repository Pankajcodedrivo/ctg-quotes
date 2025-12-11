import { Link } from "react-router-dom";
import SubFooter from "../../../../components/SubFooter";
import SubHeader from "../../../../components/SubHeader";
import LeftPanelRegister from "../../../../components/LeftPanelRegister";
import tick from "../../../../assets/images/tick.svg"
import rightArrow from "../../../../assets/images/right-arrow.svg"
import leftArrow from "../../../../assets/images/left-arrow.svg"
import Icon4 from "../../../../assets/images/icon-4.svg"
import deleteIcon from "../../../../assets/images/delete.svg"
import editIcon from "../../../../assets/images/edit-icon.svg"
const Step4 = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="Vehicle & Driving History" subtitle="" img={Icon4} />
            <div className="right-panel register">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                        <ul className="step-list">
                            <li className="active">
                                <span><img src={tick} alt="" /></span>
                                <p>Step 1</p>
                            </li>
                            <li className="completed">
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
                            <li>
                                <span><img src={tick} alt="" /></span>
                                <p>Step 5</p>
                            </li>
                        </ul>
                       <div className="auth-form">
                            <div>
                                <div className="mb-4 d-flex align-items-center justify-content-between">
                                    <h4>Vehicle Information</h4>
                                    <button className="btn btn-outline blue">I will not be adding a vehicle, only myself.</button>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3">
                                        <div className="form-group">
                                            <label className="form-label float">Year*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Year</option>
                                                <option value="1">Select Year</option>
                                                <option value="1">Select Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-9">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="form-group">
                                                    <label className="form-label float">Make*</label>
                                                    <select name="" id="" className="form-control">
                                                        <option value="1" disabled>Select Make</option>
                                                        <option value="1">Select Make</option>
                                                        <option value="1">Select Make</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group">
                                                    <label className="form-label float">Model*</label>
                                                    <select name="" id="" className="form-control">
                                                        <option value="1" disabled>Select Model</option>
                                                        <option value="1">Select Model</option>
                                                        <option value="1">Select Model</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">What is your vehicle’s VIN number?</label>
                                            <input type="text" placeholder="WAUAUGFF5F1XXXXX" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <p className="form-txt pt-3">17 characters max, letters I and U not allowed</p>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">How is this vehicle primarily used?*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Commute (to/from work or school)</option>
                                                <option value="1">Commute (to/from work or school)</option>
                                                <option value="1">Commute (to/from work or school)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 mt-3 mb-2">
                                        <label className="checkbox-container">I also use this vehicle for ridesharing (Uber, Lyft, Amazon Flex, Uber Eats, etc.)
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">How many days per week do you use this vehicle to commute? *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select days</option>
                                                <option value="1">Select days</option>
                                                <option value="1">Select days</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">How many miles do you drive one way to work or school? *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Miles</option>
                                                <option value="1">Select Miles</option>
                                                <option value="1">Select Miles</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">What is the primary ZIP Code where the vehicle is kept? *</label>
                                            <input type="text" placeholder="Example: 75080" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">Do you own, lease, or finance this vehicle? *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Own</option>
                                                <option value="1">Own</option>
                                                <option value="1">Own</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">How long have you had this vehicle? *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Option</option>
                                                <option value="1">Select Option</option>
                                                <option value="1">Select Option</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">What is your estimated annual mileage? *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Option</option>
                                                <option value="1">Select Option</option>
                                                <option value="1">Select Option</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center btn-bottom">
                                    <button className="btn btn-outline blue"> Save Vehicle</button>
                                    <button className="btn btn-outline blue"> + Add Another Vehicle</button>
                                </div>
                            </div>
                        </div>
                        <div className="btn-flex mt-40">
                            <button type="submit" className="btn btn-secondary"><span><img src={leftArrow} alt="" /></span> Back </button>
                            <button type="submit" className="btn btn-primary">Save & Continue <span><img src={rightArrow} alt="" /></span></button>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
        </section>
    )
};

export default Step4;