import { Link } from "react-router-dom";
import { useState } from "react";
import SubFooter from "../../../../components/SubFooter";
import SubHeader from "../../../../components/SubHeader";
import LeftPanelRegister from "../../../../components/LeftPanelRegister";
import Step from "../../../../components/Step";
import rightArrow from "../../../../assets/images/right-arrow.svg"
import leftArrow from "../../../../assets/images/left-arrow.svg"
import Icon8 from "../../../../assets/images/icon-8.svg"
import user from "../../../../assets/images/user.png"
import plus from "../../../../assets/images/plus.svg"
import tickIcon from "../../../../assets/images/tick-icon.svg"
const AccountSetup2 = () => {
    const [active, setActive] = useState("section1");
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="Family Circle" subtitle="" img={Icon8} />
            <div className="right-panel register">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                         <Step stepNumber={4} />
                        <div className="auth-form">
                            <div className="mb-4">
                                <h4>Create Your Family Circle</h4>
                                <div className="mt-2 para">
                                    <p>Add the people who will be included in your policies. You can invite them to create their own profile and connect it yours, or you can manually enter their information.</p>
                                </div>
                            </div>
                            <div className="family-care-otr">
                                <div className="family-care-box setup-2">
                                    <div className="family-care-img">
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="family-care-txt">
                                        <h3>You</h3>
                                        <p>Main Insured</p>
                                    </div>
                                </div>
                                <div className="family-care-box setup-2">
                                    <div className="family-care-img">
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="family-care-txt">
                                        <h3>Selena</h3>
                                        <p>Spouse</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add-membar no-back">
                                <span><img src={plus} alt="" /></span>
                                <p>Add Member</p>
                            </div>
                            <div className="family-care-box mobile-start justify-content-start align-items-start">
                                <div className="family-care-img">
                                    <img src={user} alt="" />
                                </div>
                                <div className="family-care-txt w-100">
                                    <h3>Name</h3>
                                    <p>Relationship</p>
                                    <div className="add-mmeber-form">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-label float">Name*</label>
                                                        <input type="text" className="form-control" placeholder="David" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-label float">Relationship*</label>
                                                        <input type="text" className="form-control" placeholder="Son" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="invite-method">
                                                <div className="invite-tab">
                                                    <button type="button" className={active === "invite-tab-1" ? "active" : ""} onClick={() => setActive("invite-tab-1")}>Invite them to complete their own profile</button>
                                                    <button type="button" className={active === "invite-tab-2" ? "active" : ""} onClick={() => setActive("invite-tab-2")}>I will enter their information manually</button>
                                                </div>
                                                <div className="invite-method-content">
                                                    {active === "invite-tab-1" &&
                                                        (
                                                            <div className="form-wrapper">
                                                                <div className="form-group">
                                                                    <label className="form-label">Select Invite Method:</label>
                                                                    <ul className="radio-list">
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
                                                                <div className="form-group">
                                                                    <label className="form-label float">Email Address*</label>
                                                                    <input type="email" className="form-control" placeholder="Enter email" />
                                                                </div>
                                                                <button type="submit" className="btn btn-primary w-100">Send Invite</button>
                                                            </div>
                                                        )
                                                    }
                                                    {active === "invite-tab-2" && 
                                                    (<div></div>)
                                                    }
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <h6 className="invited-bottom"><span><img src={tickIcon} alt="" /></span>David has been invited</h6>
                            <div className="add-membar no-back mb-100">
                                <span><img src={plus} alt="" /></span>
                                <p>Add Member</p>
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

export default AccountSetup2;