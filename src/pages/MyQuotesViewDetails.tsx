import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import arrowRight from "../assets/images/arrow-right.svg";
import progLogo from "../assets/images/prog-logo.svg";
import email from "../assets/images/email.svg";
import tel from "../assets/images/tel.svg";
import pdf from "../assets/images/pdf.svg";

const MyQuotesViewDetails = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="details-top">
                        <span className="prog-logo"><img src={progLogo} alt="" /></span>
                        <button type="button" className="btn green-btn">Buy Quote <span><img src={arrowRight} alt="" /></span></button>
                    </div>
                    <div className="card mb-40">
                        <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-3">
                            <div>
                                <div className="dash-hdr">
                                    <h3 className="font-wight-600">Lone Star Agency Group</h3>
                                </div>
                                <ul className="details-list">
                                    <li>
                                        1234 Main St, Houston, TX 77002
                                    </li>
                                    <li>
                                        <a href="mailto:debra.holt@example.com"><span><img src={email} alt="" /></span>debra.holt@example.com</a>
                                    </li>
                                    <li>
                                        <a href="tel:+"><span><img src={tel} alt="" /></span>(229) 555-0109</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-end details-right">
                                <p className="mb-3">Quoted on: October 10, 2025 By Michael Davis</p>
                                <div className="btn-wrap">
                                    <button className="btn btn-outline-primary">Message Agency</button>
                                    <button className="btn btn-outline-danger">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <div className="dash-hdr mb-0 pdf-innr">
                                    <h3 className="font-wight-600 mb-0">Condo</h3>
                                    <button type="button" className="pdf-link"><img src={pdf} alt="" /> <span>View PDF</span></button>
                                </div>
                            </div>
                            <div className="price-btn-innr">
                                <span className="price-btn active">$245/month</span>
                                <span className="price-btn">$720/in-full</span>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <ul className="coverage-grid mb-0">
                                <li>
                                    <p><strong>Building Property (Interior)</strong><span>25,000 ($250 deductible)</span></p>
                                </li>
                                <li>
                                    <p><strong>Theft</strong><span>Included</span></p>
                                </li>
                                <li>
                                    <p><strong>Personal Property</strong> <span>25,000 ($250 deductible)</span> </p>
                                </li>
                                <li>
                                    <p><strong>Wind/Hail</strong><span>$250 deductible</span></p>
                                </li>
                                <li>
                                    <p><strong>Liability</strong><span>300,000</span></p>
                                </li>
                                <li>
                                    <p><strong>Water Backup</strong><span>5,000</span></p>
                                </li>
                                <li>
                                    <p><strong>Medical Payments</strong><span>5,000</span></p>
                                </li>
                                <li>
                                    <p><strong>Scheduled Personal Property</strong><span>Optional</span></p>
                                </li>
                                <li>
                                    <p><strong>Loss of Use</strong><span>12,000</span></p>
                                </li>
                                <li>
                                    <p><strong>Identity Theft</strong><span>15,000</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div className="dash-hdr mb-0 pdf-innr">
                                <h3 className="font-wight-600 mb-0">Landlord</h3>
                                <button type="button" className="pdf-link"><img src={pdf} alt="" /> <span>View PDF</span></button>
                            </div>
                        </div>
                        <div className="price-btn-innr">
                            <span className="price-btn active">$245/month</span>
                            <span className="price-btn">$720/in-full</span>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <ul className="coverage-grid mb-0">
                            <li>
                                <p><strong>Dwelling Coverage</strong><span>Full Replacement Cost</span></p>
                            </li>
                            <li>
                                <p><strong>Wind/Hail</strong><span>1% deductible</span></p>
                            </li>
                            <li>
                                <p><strong>Other Structures</strong> <span>10% of Dwelling</span> </p>
                            </li>
                            <li>
                                <p><strong>Water Backup</strong><span>5,000</span></p>
                            </li>
                            <li>
                                <p><strong>Personal Property (Landlord-Owned)</strong><span>5,000</span></p>
                            </li>
                            <li>
                                <p><strong>Equipment Breakdown</strong><span>50,000</span></p>
                            </li>
                            <li>
                                <p><strong>Loss of Rents</strong><span>12 Months</span></p>
                            </li>
                            <li>
                                <p><strong>Service Line Coverage</strong><span>10,000</span></p>
                            </li>
                            <li>
                                <p><strong>Liability</strong><span>300,000</span></p>
                            </li>
                            <li>
                                <p><strong>Ordinance & Law</strong><span>10% of Dwelling</span></p>
                            </li>
                            <li>
                                <p><strong>Medical Payments</strong><span>5,000</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyQuotesViewDetails;
