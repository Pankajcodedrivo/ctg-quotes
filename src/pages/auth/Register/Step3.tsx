import { Link } from "react-router-dom";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import infoIcon from "../../../assets/images/info-icon-1.svg"
import tick from "../../../assets/images/tick.svg"
import rightArrow from "../../../assets/images/right-arrow.svg"
import leftArrow from "../../../assets/images/left-arrow.svg"
import eicon1 from "../../../assets/images/e-icon-1.svg"
import eicon2 from "../../../assets/images/e-icon-2.svg"
import eicon3 from "../../../assets/images/e-icon-3.svg"
import eicon4 from "../../../assets/images/e-icon-4.svg"
import eicon5 from "../../../assets/images/e-icon-5.svg"
import eicon6 from "../../../assets/images/e-icon-6.svg"
const Step3 = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="What Are You Shopping For?" subtitle="" img={infoIcon} />
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
                            <div className="row g-3">
                                <div className="col-xl-4 col-md-6 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon1} alt="" /></span>
                                            <p>Auto Insurance</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-xl-4 col-md-6 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon2} alt="" /></span>
                                            <p>Property Insurance</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-xl-4 col-md-6 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon3} alt="" /></span>
                                            <p>Renters</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-xl-4 col-md-6 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon4} alt="" /></span>
                                            <p>Life</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-xl-4 col-md-6 explore-otr">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="explore-innr">
                                            <span className="explore-img"><img src={eicon5} alt="" /></span>
                                            <p>Business</p>
                                        </span>
                                    </label>
                                </div>
                                <div className="col-xl-4 col-md-6 explore-otr">
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

export default Step3;