import { Link } from "react-router-dom";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import Icon6 from "../../../assets/images/icon-6.svg"
import Step from "../../../components/Step";
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
                       <Step stepNumber={5}/>
                       <div className="auth-form">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#review-information">Review Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#disclaimers">Disclaimers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#sign-consent">Sign Consent</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="review-information">
                                    <div className="auth-form-innr">
                                        <div className="review-hdr mb-40">
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
                                                    <h6 className="sub-hdr">Email</h6>
                                                    <p className="sub-para">sram8@ctglead.com</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Phone</h6>
                                                    <p className="sub-para">(312) 555-0101</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-hdr mb-40">
                                            <h4>Location</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">Address</h6>
                                                    <p className="sub-para">2458 North Halsted St, Apt 4B, Wicker Park — Chicago, IL 60622</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-hdr mb-40">
                                            <h4>What are you shopping for?</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <p className="sub-para back">Auto insurance</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-hdr mb-40">
                                            <h4>Family Circle</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-xl-12 mb-4">
                                                    <h6 className="sub-hdr">How many drivers will be in your policy, including yourself?</h6>
                                                    <p className="sub-para">2</p>
                                                </div>
                                                <div className="col-xl-12 mb-4">
                                                    <h6 className="sub-hdr">How many vehicles will you be insuring?</h6>
                                                    <p className="sub-para">4</p>
                                                </div>
                                                <div className="col-xl-12">
                                                    <h6 className="sub-hdr">Would you like to invite anyone to fill out their required information so they can be added to the quote?</h6>
                                                    <p className="sub-para">No, I already know their driver’s license, date of birth, VIN, and other required details.</p>
                                                </div>
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