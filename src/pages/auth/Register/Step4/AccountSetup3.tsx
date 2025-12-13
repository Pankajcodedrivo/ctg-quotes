import { Link } from "react-router-dom";
import SubFooter from "../../../../components/SubFooter";
import SubHeader from "../../../../components/SubHeader";
import LeftPanelRegister from "../../../../components/LeftPanelRegister";
import Step from "../../../../components/Step";
import rightArrow from "../../../../assets/images/right-arrow.svg"
import leftArrow from "../../../../assets/images/left-arrow.svg"
import Icon8 from "../../../../assets/images/icon-8.svg"
import user from "../../../../assets/images/user.png"
import userActive from "../../../../assets/images/user-gray.png"
const AccountSetup3 = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="Family Circle" subtitle="" img={Icon8} />
            <div className="right-panel register">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                        <Step />
                       <div className="auth-form">
                            <div className="mb-70">
                                <h4 className="mb-100">Which household members will be included in your auto quote?  </h4>
                                <ul className="member-checkbox">
                                    <li>
                                        <label className="checkbox-container">
                                            <input type="checkbox" />
                                            <span className="family-care-box">
                                               <span className="family-care-img">
                                                    <img className="user-img" src={user} alt="" />
                                                    <img className="user-active-img" src={userActive} alt="" />
                                                </span>
                                                <span className="family-care-txt">
                                                    <h3>Selena</h3>
                                                    <p>Spouse</p>
                                                </span>
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox-container">
                                            <input type="checkbox" />
                                            <span className="family-care-box">
                                               <span className="family-care-img">
                                                    <img className="user-img" src={user} alt="" />
                                                    <img className="user-active-img" src={userActive} alt="" />
                                                </span>
                                                <span className="family-care-txt">
                                                    <h3>DavidSon</h3>
                                                    <p>Son</p>
                                                </span>
                                            </span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-70">
                                <h4 className="mb-4">How many vehicles will be on your policy?* </h4>
                                <div className="row">
                                    <div className="col-md-7">
                                        <select name="" id="" className="form-control">
                                            <option value="1" disabled>Select</option>
                                            <option value="1">Select</option>
                                            <option value="1">Select</option>
                                        </select>
                                    </div>
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

export default AccountSetup3;