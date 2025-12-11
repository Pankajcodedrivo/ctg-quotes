import { Link } from "react-router-dom";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import Icon6 from "../../../assets/images/icon-6.svg"
import tick from "../../../assets/images/tick.svg"
import rightArrow from "../../../assets/images/right-arrow.svg"
import edit from "../../../assets/images/edit.svg"
import drawIcon from "../../../assets/images/draw-icon.svg"
import sign from "../../../assets/images/sign.png"
const Step5 = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="Review & Consent" subtitle="" img={Icon6} />
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
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#review-information">Review Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link completed" data-bs-toggle="tab" href="#disclaimers">Disclaimers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#sign-consent">Sign Consent</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="review-information">
                                    <div className="auth-form-innr">
                                        <div className="review-hdr mb-4">
                                            <h4>Profile Summary</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">First Name</h6>
                                                    <p className="sub-para">Selena</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Last Name</h6>
                                                    <p className="sub-para">Ramirez</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Birthday(DOB)</h6>
                                                    <p className="sub-para">08/05/1998</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Marital Status</h6>
                                                    <p className="sub-para">Single</p>
                                                </div>
                                                <div className="col-md-8 mb-4">
                                                    <h6 className="sub-hdr">Gender</h6>
                                                    <p className="sub-para">Female</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Kind of driver’s license you have?</h6>
                                                    <p className="sub-para">Personal</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Years you have been licensed?</h6>
                                                    <p className="sub-para">3 years or more</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Driver’s License State</h6>
                                                    <p className="sub-para">D400-7836-0001</p>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">Driver’s Licence Number</h6>
                                                    <p className="sub-para">D400-7836-0001</p>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">Has your driver’s license been suspended in the last 5 years?</h6>
                                                    <p className="sub-para">sram8@ctglead.com</p>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <h6 className="sub-hdr">Email</h6>
                                                    <p className="sub-para">sram8@ctglead.com</p>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <h6 className="sub-hdr">Phone</h6>
                                                    <p className="sub-para">(312) 555-0101</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-hdr mb-4">
                                            <h4>Identify Role</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">Carlos wants to add you to his Family Circle. Would you like to connect?</h6>
                                                    <p className="sub-para">Yes,Connect</p>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">Do you live at the same address as the main insured?</h6>
                                                    <p className="sub-para">Yes</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <h6 className="sub-hdr">What is your relationship with the main insured?</h6>
                                                    <p className="sub-para">Child</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-hdr mb-4">
                                            <h4>What kind of policy are you being added to?</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr mb-2">Which types of insurance would you like to explore?</h6>
                                                    <p className="sub-para back">Auto insurance</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-hdr mb-4">
                                            <h4> Insurance History</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">What is the year of your vehicle?</h6>
                                                <p className="sub-para">2025</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">What is the make of your vehicle?</h6>
                                                <p className="sub-para">Audi</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">What is the model of your vehicle?</h6>
                                                <p className="sub-para">A3</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">What is your vehicle’s VIN number?</h6>
                                                <p className="sub-para">WAUAUGFF5F1XXXXX</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">How is this vehicle primarily used?</h6>
                                                <p className="sub-para">Commute (to/from work or school)</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">Days/week you use this vehicle?</h6>
                                                <p className="sub-para">1</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">How many miles do you drive one way to work or school?</h6>
                                                <p className="sub-para">Less than 5 miles</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">What is the primary ZIP Code where the vehicle is kept?</h6>
                                                <p className="sub-para">75080</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">Do you own, lease, or finance this vehicle?</h6>
                                                <p className="sub-para">Own</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">How long have you had this vehicle?</h6>
                                                <p className="sub-para">Own</p>
                                            </div>
                                            <div className="col-xl-4 mb-4">
                                                <h6 className="sub-hdr">Your estimated annual mileage?</h6>
                                                <p className="sub-para">Under 3,999</p>
                                            </div>
                                            <div className="col-xl-12 mb-4">
                                                <h6 className="sub-hdr">In the past 7 years (since November 2018), have you been involved in any accidents, experienced vehicle damage, or filed an insurance claim (regardless of fault)?</h6>
                                                <p className="sub-para">Yes</p>
                                            </div>
                                            <div className="col-xl-12 mb-4">
                                                <h6 className="sub-hdr">In the past 5 years (since November 2020), have you received any traffic tickets or violations?</h6>
                                                <p className="sub-para">Yes</p>
                                            </div>
                                            <div className="col-xl-12">
                                                <h6 className="sub-hdr">Do you currently require an SR-22 filing?</h6>
                                                <p className="sub-para">Yes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="disclaimers">
                                    <div className="auth-form-innr">
                                        <div className="review-hdr mb-4">
                                            <h4>Disclaimer Text</h4>
                                        </div>
                                        <ul className="check-list">
                                            <li>
                                                <label className="checkbox-container">Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox-container">Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox-container">Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox-container">Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox-container">Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="sign-consent">
                                    <div className="auth-form-innr">
                                        <div className="review-hdr mb-40">
                                            <h4>Create your Signature</h4>
                                        </div>
                                        <ul className="check-list">
                                            <li>
                                                <label className="checkbox-container">Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox-container">Magna nunc ut consequat quisque quam scelerisque tristique. Vestibulum pellentesque eu sagittis eget. Sed posuere a elit faucibus egestas iaculis nec nulla. At vitae cursus in montes neque luctus. Laoreet augue auctor sed eu tempus malesuada pellentesque dictum sit. Non cursus tincidunt et pharetra malesuada cras.
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                        <div className="draw-otr">
                                            <h6><span><img src={drawIcon} alt="" /></span> Draw</h6>
                                            <div className="draw-box">
                                                <img src={sign} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className="checkbox-container">I consent to CTG collecting and storing my information for the purpose of providing insurance quotes and related services
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-end mt-40">
                            {/* next */}
                            {/* <button type="submit" className="btn btn-primary">Next <span><img src={rightArrow} alt="" /></span></button> */}
                            {/* Complete Your Profile */}
                            <button type="submit" className="btn btn-primary">Complete Your Profile <span><img src={rightArrow} alt="" /></span></button>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
        </section>
    )
};

export default Step5;