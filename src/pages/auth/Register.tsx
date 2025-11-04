import rightArrow from "../../assets/images/right-arrow.svg"
import leftArrow from "../../assets/images/left-arrow.svg"
import SubFooter from "../../components/SubFooter";
import SubHeader from "../../components/SubHeader";
import LeftPanelRegister from "../../components/LeftPanelRegister";
import infoIcon from "../../assets/images/info-icon-1.svg"
import tick from "../../assets/images/tick.svg"
import eye from "../../assets/images/eye-off.svg"
import eicon1 from "../../assets/images/e-icon-1.svg"
import eicon2 from "../../assets/images/e-icon-2.svg"
import eicon3 from "../../assets/images/e-icon-3.svg"
import eicon4 from "../../assets/images/e-icon-4.svg"
import eicon5 from "../../assets/images/e-icon-5.svg"
import eicon6 from "../../assets/images/e-icon-6.svg"
import edit from "../../assets/images/edit.svg"
const Register = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="Personal Information" img={infoIcon} />
            <div className="right-panel">
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
                            <li>
                                <span><img src={tick} alt="" /></span>
                                <p>Step 6</p>
                            </li>
                            <li>
                                <span><img src={tick} alt="" /></span>
                                <p>Step 7</p>
                            </li>
                        </ul>

                        {/* step 1 Personal Information*/}
                        <div className="auth-form">
                            <div className="mb-40">
                                <div className="mb-4">
                                    <h4>Let’s Get Started</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">First Name <span>(as it appears on Driver License)*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">Last Name <span>(as it appears on Driver License)*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">Birthday <span>(DOB)*</span></label>
                                            <input type="date" className="form-control" placeholder="Select DOB" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="form-txt">You must be 18 or older to create an account. If you’re under 18, please have the main insured add you manually.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">Marital Status</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Status</option>
                                                <option value="1">Select Status</option>
                                                <option value="1">Select Status</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
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
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">What kind of driver’s license do you have?*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select option</option>
                                                <option value="1">Select option</option>
                                                <option value="1">Select option</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">How many years have you been licensed?*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select option</option>
                                                <option value="1">Select option</option>
                                                <option value="1">Select option</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">Driver’s License State *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select State</option>
                                                <option value="1">Select State</option>
                                                <option value="1">Select State</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
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
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">Email Address *</label>
                                            <div className="verify-innr">
                                                <input type="email" className="form-control" placeholder="Enter Email" />
                                                <button className="btn btn-primary" type="submit">Verify</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">Phone Number *</label>
                                            <div className="verify-innr">
                                                <input type="tel" className="form-control" placeholder="Enter Number" />
                                                <button className="btn btn-primary" type="submit">Verify</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
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
                                    <div className="col-md-6">
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
                            <button className="btn btn-primary">Save & Continue <span><img src={rightArrow} alt="" /></span></button>
                        </div>

                        {/* step 2 Location*/}
                        <div className="auth-form">
                            <div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-label float">Where do you live? <span>(primary address)*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">Unit/Apt <span> (optional)</span></label>
                                            <input type="text" className="form-control" placeholder="Enter" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">State*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Status</option>
                                                <option value="1">Select Status</option>
                                                <option value="1">Select Status</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">City *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select City</option>
                                                <option value="1">Select City</option>
                                                <option value="1">Select City</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label float">City *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select City</option>
                                                <option value="1">Select City</option>
                                                <option value="1">Select City</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Location - non Texas */}
                                    <div className="col-md-12">
                                        <div className="form-group mb-0">
                                            <textarea className="form-control" placeholder="Great news! We’re coming to your state soon. You’ve been added to our waitlist, and we’ll email you as soon as we’re live. Thanks for being part of the CTG community!"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-flex mt-40">
                            <button className="btn btn-secondary"><span><img src={leftArrow} alt="" /></span> Back </button>
                            <button className="btn btn-primary">Save & Continue <span><img src={rightArrow} alt="" /></span></button>
                            {/* Location - non Texas */}
                            {/* <button className="btn btn-primary">Notify me <span><img src={rightArrow} alt="" /></span></button> */}
                        </div>

                        {/* step 3 Property & Vehicle Details*/}
                        <div className="auth-form">
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="form-label">Do you rent or own your home? <span> (If you live with someone like parents or friends, select Rent)</span></label>
                                    <ul className="radio-list mb-4">
                                        <li>
                                            <label className="radio-container">Own (Primary Residence)
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">Rent
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Type of Home</label>
                                    <ul className="radio-list mb-4">
                                        <li>
                                            <label className="radio-container">Single Family
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">Duplex
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">Condo
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">Townhome
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">Apartment
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">Mobile Home
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Do you have any other homes beside your main one?</label>
                                    <ul className="radio-list mb-4">
                                        <li>
                                            <label className="radio-container">A rental or investment one
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">A vacation or secondary home
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">Nope, just this one
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">How many vehicles are in your household?</label>
                                    <ul className="radio-list mb-4 grid">
                                        <li>
                                            <label className="radio-container">0
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">1
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">2
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">3
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">4
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">5
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">6
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">7
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">8
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">9+
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group mb-0">
                                        <textarea className="form-control" value="We ask about your vehicles and properties so your insurance profile stays complete and ready. Keeping this information updated makes shopping for coverage quick and easy whenever you’re ready."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-flex mt-40">
                            <button className="btn btn-secondary"><span><img src={leftArrow} alt="" /></span> Back </button>
                            <button className="btn btn-primary">Save & Continue <span><img src={rightArrow} alt="" /></span></button>
                        </div>

                        {/* step 4 What Would You Like to Explore? */}
                        <div className="auth-form">
                            <div className="row g-3">
                                <div className="col-md-4 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon1} alt="" /></span>
                                            <p>Auto Insurance</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-md-4 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon2} alt="" /></span>
                                            <p>Property Insurance</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-md-4 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon3} alt="" /></span>
                                            <p>Renters</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-md-4 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon4} alt="" /></span>
                                            <p>Life</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-md-4 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon5} alt="" /></span>
                                            <p>Business</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-md-4 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon6} alt="" /></span>
                                            <p>Recreational Vehicles</p>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="btn-flex mt-40">
                            <button className="btn btn-secondary"><span><img src={leftArrow} alt="" /></span> Back </button>
                            <button className="btn btn-primary">Save & Continue <span><img src={rightArrow} alt="" /></span></button>
                        </div>

                        {/* step 5  Insurance History */}
                        <div className="auth-form">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="form-label float">Who is your current Auto Insurance Provider?*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Enter Name</option>
                                            <option value="1">Enter Name</option>
                                            <option value="1">Enter Name</option>
                                        </select>
                                        {/* Other/Not Listed/AAA */}
                                        <p className="info-txt">If your current carrier (such as AAA) doesn’t report insurance information to the industry database, you may need to upload a Letter of Experience to confirm how long you’ve been insured. Without this verification, some top carriers may be unable to confirm your prior coverage, which could affect your eligibility for preferred rates.</p>
                                    </div>
                                    {/* I Do Not Currently Have Insurance” */}
                                    <div className="form-group">
                                        <textarea className="form-control" value="No worries! We’ll help you find a carrier that can get you covered and start building your insurance history for better rates in the future."></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">How long have you been consistently insured? <span className="d-block">(Without a gap greater than 30 days)</span></label>
                                    <ul className="radio-list mb-4">
                                        <li>
                                            <label className="radio-container">Less than 30 days
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">1–3 months
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">6+ months
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">1 year or more
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">3 years or more
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">5+ years
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">How do you pay for your insurance? <span className="d-block">(This helps us understand your payment preferences.)</span></label>
                                    <ul className="radio-list mb-4">
                                        <li>
                                            <label className="radio-container">I pay monthly
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">I pay every 6 months (in full)
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">I pay once a year (in full)
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">About how much do you pay per month (or would you estimate paying)? <span className="d-block">(Your answer helps us find plans that fit your budget.)</span></label>
                                    <ul className="radio-list mb-4">
                                        <li>
                                            <label className="radio-container">Under $100/month
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">$100–$150/month
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">$151–$200/month
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">$201–$300/month
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">Over $300/month
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">I’m not sure
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group hg">
                                        <label className="form-label float">In the past 7 years (since November 2018), have you been involved in any accidents, experienced vehicle damage, or filed an insurance claim (regardless of fault)?*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select Option</option>
                                            <option value="1">Select Option</option>
                                            <option value="1">Select Option</option>
                                        </select>
                                        <p className="info-txt">Examples: hail or weather damage, theft, vandalism, hitting another car, object, or animal, or being hit by another driver.</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="form-label float">In the past 5 years (since November 2020), have you received any traffic tickets or violations?*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select Option</option>
                                            <option value="1">Select Option</option>
                                            <option value="1">Select Option</option>
                                        </select>
                                        <p className="info-txt">Examples: speeding, running a stop sign, careless driving, expired registration, or other moving violations</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group mb-0">
                                        <label className="form-label float">Do you currently require an SR-22 filing?*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select Option</option>
                                            <option value="1">Select Option</option>
                                            <option value="1">Select Option</option>
                                        </select>
                                        <p className="info-txt">An SR-22 is a certificate your state may require if your license was suspended or revoked, or if you’ve been involved in certain violations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-flex mt-40">
                            <button className="btn btn-secondary"><span><img src={leftArrow} alt="" /></span> Back </button>
                            <button className="btn btn-primary">Save & Continue <span><img src={rightArrow} alt="" /></span></button>
                        </div>

                        {/* step 6 Family Circle */}
                        <div className="auth-form">
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="form-label">Would you like to add your spouse? <span className="d-block">(If married or living with a partner, adding them helps with bundling and shared savings.)</span></label>
                                    <ul className="radio-list mb-4">
                                        <li>
                                            <label className="radio-container">Yes, I’ll invite them to create their own profile (recommended)
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">Yes, I’ll enter their information myself
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">I do not want to add my spouse (exclude)
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <div className="inner-auth-form mb-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label float">Full Name*</label>
                                                    <input type="text" className="form-control" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label float">Relationship to you *</label>
                                                    <select name="" id="" className="form-control">
                                                        <option value="1" disabled>Spouse</option>
                                                        <option value="1">Spouse</option>
                                                        <option value="1">Spouse</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Mode of invite</label>
                                                <ul className="radio-list mb-4">
                                                    <li>
                                                        <label className="radio-container">Email
                                                            <input type="radio" name="radio" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="radio-container">Phone
                                                            <input type="radio" name="radio" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-0">
                                                    <label className="form-label float">Email Address*</label>
                                                    <input type="email" className="form-control" placeholder="Enter email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-40">
                                                <button className="w-100 btn btn-primary">Send Invite</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Would you like to add anyone else to your circle? <span className="d-block">(Children, parents, or other household members)</span></label>
                                    <ul className="radio-list mb-4">
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
                                <div className="col-md-12">
                                    <label className="form-label">How many people would you like to add (not including yourself or spouse)?</label>
                                    <ul className="radio-list grid mb-4">
                                        <li>
                                            <label className="radio-container">1
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">2
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">3
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">4
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">5
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">6
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">7
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">8
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">9
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio-container">10
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 mb-40">
                                    <div className="inner-auth-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label float">Full Name*</label>
                                                    <input type="text" className="form-control" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label float">Relationship to you *</label>
                                                    <select name="" id="" className="form-control">
                                                        <option value="1" disabled>Child</option>
                                                        <option value="1">Child</option>
                                                        <option value="1">Child</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Invite or Enter Information? (can only invite if user is 18 or older, if not please manually add their information)</label>
                                                <ul className="radio-list mb-4">
                                                    <li>
                                                        <label className="radio-container">Invite them to create their own profile (recommended)
                                                            <input type="radio" name="radio" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="radio-container">I’ll enter their information manually
                                                            <input type="radio" name="radio" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Mode of invite</label>
                                                <ul className="radio-list mb-4">
                                                    <li>
                                                        <label className="radio-container">Email
                                                            <input type="radio" name="radio" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="radio-container">Phone
                                                            <input type="radio" name="radio" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-0">
                                                    <label className="form-label float">Email Address*</label>
                                                    <input type="email" className="form-control" placeholder="Enter email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-40">
                                                <button className="w-100 btn btn-primary">Send Invite</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group mb-0">
                                        <textarea className="form-control" placeholder="Keeping your Family Circle up to date helps CTG personalize your quotes and automatically detect future bundle savings across your household."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-flex mt-40">
                            <button className="btn btn-secondary"><span><img src={leftArrow} alt="" /></span> Back </button>
                            <button className="btn btn-primary">Save & Continue <span><img src={rightArrow} alt="" /></span></button>
                        </div>

                        {/* step 7 Review & Consent */}
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
                            <div className="auth-form-innr">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="review-information">
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
                                            <h4>Property and Vehicle Details</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Do you rent or own your home?</h6>
                                                    <p className="sub-para">Own</p>
                                                </div>
                                                <div className="col-md-8 mb-4">
                                                    <h6 className="sub-hdr">Type of home</h6>
                                                    <p className="sub-para">Single Family</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Do you have any other home beside your main one?</h6>
                                                    <p className="sub-para">A rental or investment one</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">How many vehicles are in your household?</h6>
                                                    <p className="sub-para">0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-hdr mb-40">
                                            <h4>What Would You Like to Explore?</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">Which types of insurance would you like to explore?</h6>
                                                    <p className="sub-para back">Auto insurance</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-hdr mb-40">
                                            <h4> Insurance History</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Current Insurer:</h6>
                                                    <p className="sub-para">state farm</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">How long have you been uninsured?</h6>
                                                    <p className="sub-para">Less than 30 days</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">How do you pay for your insurance?</h6>
                                                    <p className="sub-para">I pay monthly</p>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">How much do you pay per month?</h6>
                                                    <p className="sub-para">Under $100/month</p>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">In the past 7 years (since November 2018), have you been involved in any accidents, experienced vehicle damage, or filed an insurance claim (regardless of fault)?</h6>
                                                    <p className="sub-para">Yes</p>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">In the past 5 years (since November 2020), have you received any traffic tickets or violations?</h6>
                                                    <p className="sub-para">Yes</p>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <h6 className="sub-hdr">Do you currently require an SR-22 filing?</h6>
                                                    <p className="sub-para">Yes</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-hdr mb-40">
                                            <h4>Family Circle</h4>
                                            <span className="edit-icon"><img src={edit} alt="" /></span>
                                        </div>
                                        <div className="mb-16">
                                            <div className="row">
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">How many people will be added?</h6>
                                                    <p className="sub-para">1</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">How would you like to add them?</h6>
                                                    <p className="sub-para">Invite them</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-innr-box">
                                            <div className="row">
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Full Name</h6>
                                                    <p className="sub-para">Carlos G</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Relationship to you *</h6>
                                                    <p className="sub-para">Spouse</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Invite or enter into yourself</h6>
                                                    <p className="sub-para">Yes, I’ll invite them</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Mode of invite</h6>
                                                    <p className="sub-para">Email</p>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <h6 className="sub-hdr">Email Address</h6>
                                                    <p className="sub-para">Carlos@ctglead.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="disclaimers">
                                        <div className="review-hdr mb-40">
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
                                    <div className="tab-pane fade" id="sign-consent">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-end mt-40">
                            <button className="btn btn-primary">Next <span><img src={rightArrow} alt="" /></span></button>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
        </section>
    )
};

export default Register;