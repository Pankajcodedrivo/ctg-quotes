import { Link } from "react-router-dom";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import tick from "../../../assets/images/tick.svg"
import rightArrow from "../../../assets/images/right-arrow.svg"
import leftArrow from "../../../assets/images/left-arrow.svg"
import Icon8 from "../../../assets/images/icon-8.svg"
import user from "../../../assets/images/user.png"
const Step4 = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="Family Circle" subtitle="" img={Icon8} />
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
                            <div className="mb-4">
                                <h4>Create Your Family Circle</h4>
                                <div className="mt-2 para">
                                    <p>Add the people who will be included in your policies. You can invite them to create their own profile and connect it yours, or you can manually enter their information.</p>
                                </div>
                            </div>
                            <div className="family-care-otr">
                                <div className="family-care-box">
                                    <div className="family-care-img">
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="family-care-txt">
                                        <h3>You</h3>
                                        <p>Main Insured</p>
                                    </div>
                                </div>
                                <div className="family-care-box">
                                    <div className="family-care-img">
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="family-care-txt">
                                        <h3>You</h3>
                                        <p>Main Insured</p>
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

export default Step4;