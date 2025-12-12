import { Link } from "react-router-dom";
import SubFooter from "../../../../components/SubFooter";
import SubHeader from "../../../../components/SubHeader";
import LeftPanelRegister from "../../../../components/LeftPanelRegister";
import Step from "../../../../components/Step";
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
                       <Step />
                       <div className="auth-form">
                            <div>
                                <div className="edit-box">
                                    <h4>2026 Acura Integra</h4>
                                    <div className="edit-right">
                                        <Link to="/"><img src={deleteIcon} alt="" /></Link>
                                        <Link to="/"><img src={editIcon} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <label className="form-label">In the past 7 years (since November 2018), have you been involved in any accidents, experienced vehicle damage, or filed an insurance claim (regardless of fault)?*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Option</option>
                                                <option value="1">Select Option</option>
                                                <option value="1">Select Option</option>
                                            </select>
                                            <p className="info-txt">Examples: hail or weather damage, theft, vandalism, hitting another car, object, or animal, or being hit by another driver.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <label className="form-label">In the past 5 years (since November 2020), have you received any traffic tickets or violations?*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Option</option>
                                                <option value="1">Select Option</option>
                                                <option value="1">Select Option</option>
                                            </select>
                                            <p className="info-txt">Examples: speeding, running a stop sign, careless driving, expired registration, or other moving violations</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="form-group mb-0">
                                            <label className="form-label">Do you currently require an SR-22 filing?*</label>
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