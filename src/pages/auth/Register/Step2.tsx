import { Link } from "react-router-dom";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import Icon2 from "../../../assets/images/icon-2.svg"
import rightArrow from "../../../assets/images/right-arrow.svg"
import leftArrow from "../../../assets/images/left-arrow.svg"
import Step from "../../../components/Step";
const Step2 = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanelRegister title="Location" subtitle="" img={Icon2} />
            <div className="right-panel register">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                       <Step />
                       <div className="auth-form">
                            <div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-label float">Where do you live? <span>(primary address)*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label float">Unit/Apt <span> (optional)</span></label>
                                            <input type="text" className="form-control" placeholder="Enter" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-0">
                                            <label className="form-label float">City *</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select Status</option>
                                                <option value="1">Select Status</option>
                                                <option value="1">Select Status</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label float">State*</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" disabled>Select City</option>
                                                <option value="1">Select City</option>
                                                <option value="1">Select City</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label float">Zip Code *</label>
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
                            <button type="submit" className="btn btn-secondary"><span><img src={leftArrow} alt="" /></span> Back </button>
                            <button type="submit" className="btn btn-primary">Save & Continue <span><img src={rightArrow} alt="" /></span></button>
                            {/* Location - non Texas */}
                            {/* <button type="submit" className="btn btn-primary">Notify me <span><img src={rightArrow} alt="" /></span></button> */}
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
        </section>
    )
};

export default Step2;