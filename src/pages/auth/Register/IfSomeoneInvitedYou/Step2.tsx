import { Link } from "react-router-dom";
import SubFooter from "../../../../components/SubFooter";
import SubHeader from "../../../../components/SubHeader";
import LeftPanelRegister from "../../../../components/LeftPanelRegister";
import Icon7 from "../../../../assets/images/icon-7.svg"
import Step from "../../../../components/Step";
import rightArrow from "../../../../assets/images/right-arrow.svg"
import leftArrow from "../../../../assets/images/left-arrow.svg"
const Step2 = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="Identify Role" subtitle="" img={Icon7} />
            <div className="right-panel register">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                        <Step />
                       <div className="auth-form">
                            <div>
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label">Carlos wants to add you to his Family Circle. Would you like to connect?*</label>
                                        <ul className="radio-list">
                                            <li>
                                                <label className="radio-container">Yes, connect
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="radio-container">No, I’d like to start my own policy as the main insured
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label">Do you live at the same address as the main insured?*</label>
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
                                    <div className="col-md-7">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">What is your relationship with the main insured?*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Child</option>
                                                <option value="1">Child</option>
                                                <option value="1">Child</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-flex mt-40">
                            <button  type="submit" className="btn btn-secondary"><span><img src={leftArrow} alt="" /></span> Back </button>
                            <button  type="submit" className="btn btn-primary">Connect & Continue <span><img src={rightArrow} alt="" /></span></button>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
        </section>
    )
};

export default Step2;