import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import plus from "../assets/images/plus-wh.svg"
import arrow from "../assets/images/long-arrow.svg"

const MyDocuments = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>My Documents</h3>
                        <p className="font-16">Upload your current Declarations Page to compare apples to apples.</p>
                    </div>
                    <div className="cmn-box h-auto p-40 my-documents mb-4">
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Select Type</label>
                                    <select name="" id="" className="form-control">
                                        <option value="1" disabled>Auto Insurance</option>
                                        <option value="1">Auto Insurance</option>
                                        <option value="1">Auto Insurance</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Upload File</label>
                                    <input type="file" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12">
                                <div className="form-group">
                                    <label className="form-label float">Name This Document</label>
                                    <input type="text" className="form-control" placeholder="Please enter name of this doc." />
                                </div>
                            </div>
                        </div>
                        <div className="add-doc-btn">
                            <button type="button" className="btn btn-secondary">Add Document <span><img src={plus} alt="" /></span></button>
                            <button type="button" className="btn btn-primary">Save Documents <span><img src={arrow} alt="" /></span></button>
                        </div>
                    </div>
                    <div className="dash-hdr">
                        <h3>Letter of Experience (LOE)</h3>
                        <p>Is your insurance history not pulling up? This happens with carriers like AAA and smaller agencies. Call your current insurance provider and ask for a Letter of Experience. You will need this when shopping for new insurance. Once they send it, upload it here.</p>
                    </div>
                    <div className="cmn-box h-auto p-40 my-documents mb-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Upload File</label>
                                    <input type="file" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label float">Name This Document</label>
                                    <input type="text" className="form-control" placeholder="Please enter name of this doc." />
                                </div>
                            </div>
                        </div>
                        <div className="add-doc-btn">
                            <button type="button" className="btn btn-secondary">Add Document <span><img src={plus} alt="" /></span></button>
                            <button type="button" className="btn btn-primary">Save Documents <span><img src={arrow} alt="" /></span></button>
                        </div>
                    </div>
                    <div className="dash-hdr">
                        <h3>Driver License Correction</h3>
                        <p>Need to correct or change your Driver License Number? Upload your updated license here. Support will review it, and once approved, your driver license number will be updated.</p>
                    </div>
                    <div className="cmn-box h-auto p-40 my-documents">
                        <div className="side-group">
                            <div className="form-group mb-0">
                                <label className="form-label float">Upload File</label>
                                <input type="file" className="form-control" placeholder="" />
                            </div>
                            <div className="add-doc-btn">
                                <button type="button" className="btn btn-primary">Save Documents <span><img src={arrow} alt="" /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyDocuments;
