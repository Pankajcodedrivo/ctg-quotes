import { useState } from "react";
import Slider from "react-slick";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import arrowRight from "../assets/images/arrow-right.svg";
import progLogo from "../assets/images/prog-logo.svg";
import email from "../assets/images/email.svg";
import tel from "../assets/images/tel.svg";
import arrowRightGray from "../assets/images/arrow-right-gray.svg";

const MyQuotesDetails = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    const settings = {
    dots: false,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
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
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
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
                        <div className="dash-hdr">
                            <h3 className="font-wight-600">Auto Insurance</h3>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-column">
                            <div className="vehicle-tab-innr">
                                    <Slider {...settings} className="nav nav-pills vehicle-tab">
                                        <div className="nav-item"><button className="nav-link active" type="button" data-bs-target="#tab-1" data-bs-toggle="pill">Vehicle 1</button></div>
                                        <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-2" data-bs-toggle="pill">Vehicle 2</button></div>
                                        <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-3" data-bs-toggle="pill">Vehicle 3</button></div>
                                        <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-4" data-bs-toggle="pill">Vehicle 4</button></div>
                                        <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-5" data-bs-toggle="pill">Vehicle 5</button></div>
                                        <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-6" data-bs-toggle="pill">Vehicle 6</button></div>
                                        <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-7" data-bs-toggle="pill">Vehicle 7</button></div>
                                    </Slider>
                                {/* <span className="cursor-pointer"><img src={arrowRightGray} alt="" /></span> */}
                            </div>
                            <div className="price-btn-innr">
                                <span className="price-btn active">$245/month</span>
                                <span className="price-btn">$720/in-full</span>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane active">
                                <div className="card-wrapper">
                                    <p className="vehicle-main"><span>Vehicle 1:</span> 2025 Honda CR-V</p>
                                    <ul className="coverage-grid">
                                        <li>
                                            <p><strong>Liability Coverage</strong><span>30/60/25</span></p>
                                        </li>
                                        <li>
                                            <p><strong>Collision Coverage</strong><span>$500 deductible</span></p>
                                        </li>
                                        <li>
                                            <p><strong>Personal Injury Protection (PIP)</strong> <span>$2,500</span> </p>
                                        </li>
                                        <li>
                                            <p><strong>Comprehensive Coverage</strong><span>$500 deductible</span></p>
                                        </li>
                                        <li>
                                            <p><strong>Medical Payments(MedPay)</strong><span>$2,000</span></p>
                                        </li>
                                        <li>
                                            <p><strong>Towing and Labor</strong><span>$100 per disablement</span></p>
                                        </li>
                                        <li>
                                            <p><strong>Uninsured /Underinsured Motorist Bodily Injury</strong><span>30/60</span></p>
                                        </li>
                                        <li>
                                            <p><strong>Rental Reimbursement</strong><span>$40/day (up to 30 days)</span></p>
                                        </li>
                                        <li>
                                            <p><strong>Uninsured /Underinsured Motorist Property Damage</strong><span>$25,000 ($250 deductible)</span></p>
                                        </li>
                                        <li>
                                            <p><strong>Gap Coverage</strong><span>Loan/lease payoff up to 25% above ACV</span></p>
                                        </li>
                                    </ul>
                                    <div className="note-box">
                                        <label>Additional Coverages/ Notes</label>
                                        <textarea className="form-control" placeholder="I added deducible for $250 since we do not offer $100. Thank you"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade">
                                <h3>Menu 2</h3>
                                <p>Some content in menu 2.</p>
                            </div>
                            <div id="tab-3" className="tab-pane fade">
                                <h3>Menu 3</h3>
                                <p>Some content in menu 3.</p>
                            </div>
                            <div id="tab-4" className="tab-pane fade">
                                <h3>Menu 4</h3>
                                <p>Some content in menu 4.</p>
                            </div>
                            <div id="tab-5" className="tab-pane fade">
                                <h3>Menu 5</h3>
                                <p>Some content in menu 5.</p>
                            </div>
                            <div id="tab-6" className="tab-pane fade">
                                <h3>Menu 6</h3>
                                <p>Some content in menu 6.</p>
                            </div>
                            <div id="tab-7" className="tab-pane fade">
                                <h3>Menu 7</h3>
                                <p>Some content in menu 7.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-end mb-column-sm">
                        <div>
                            <div className="dash-hdr mb-0">
                                <h3 className="font-wight-600 mb-1">Home Insurance</h3>
                            </div>
                            <p className="sub-title-innr">123 Main St, Houston, TX, 77077</p>
                        </div>
                        <div className="price-btn-innr">
                            <span className="price-btn active">$245/month</span>
                            <span className="price-btn">$720/in-full</span>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <ul className="coverage-grid">
                            <li>
                                <p><strong>Dwelling</strong><span>$300,000</span></p>
                            </li>
                            <li>
                                <p><strong>All Other Perils Deductible</strong><span>$2,500</span></p>
                            </li>
                            <li>
                                <p><strong>Other Structures</strong> <span>$2,500</span> </p>
                            </li>
                            <li>
                                <p><strong>Water Backup</strong><span>$10,000</span></p>
                            </li>
                            <li>
                                <p><strong>Personal Property</strong><span>$150,000 (50% of dwelling)</span></p>
                            </li>
                            <li>
                                <p><strong>Equipment Breakdown</strong><span>$50,000</span></p>
                            </li>
                            <li>
                                <p><strong>Loss of Use</strong><span>$60,000 (20% of dwelling)</span></p>
                            </li>
                            <li>
                                <p><strong>Service Line</strong><span>$10,000</span></p>
                            </li>
                            <li>
                                <p><strong>Personal Liability</strong><span>$300,000</span></p>
                            </li>
                            <li>
                                <p><strong>Flood</strong><span>Not Included</span></p>
                            </li>
                            <li>
                                <p><strong>Medical Payments to Others</strong> <span>$5,000</span></p>
                            </li>
                            <li>
                                <p><strong>Earthquake</strong> <span>Not Included</span></p>
                            </li>
                            <li>
                                <p><strong>Windstorm & Hail</strong> <span>Included (unless excluded by region)</span></p>
                            </li>
                            <li>
                                <p><strong>Scheduled Personal Property</strong> <span>As listed per item</span></p>
                            </li>
                            <li>
                                <p><strong>Hurricane or Named Storm Deductible</strong> <span>2% of dwelling</span></p>
                            </li>
                        </ul>
                        <div className="note-box">
                            <label>Additional Coverages/ Notes</label>
                            <textarea className="form-control" placeholder="I added deducible for $250 since we do not offer $100. Thank you"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyQuotesDetails;
