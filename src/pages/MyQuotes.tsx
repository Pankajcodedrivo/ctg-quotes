import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import logo1 from "../assets/images/lgo-1.png";
import logo2 from "../assets/images/lgo-2.png";
import downArrow from "../assets/images/down-arrow-blk.svg";

const MyQuotes = () => {
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
                        <h3>Welcome back, Maria!</h3>
                    </div>
                    <div className="mb-4 d-flex align-items-center justify-content-between">
                        <h4 className="clr-3d">Your Current Quotes</h4>
                        <Link to="" className="quote-history">Quote History &gt;</Link>
                    </div>
                    {/* quote sent */}
                    {/* <div className="quote-sent">
                        <p>Quotes sent on 11/14/2025 <span><img src={downArrow} alt="" /></span></p>
                    </div> */}
                    <div className="quotes-box-otr">
                        <div className="quotes-box-innr">
                            <div className="quotes-box-top">
                                <div className="quote-logo-innr">
                                    <span><img src={logo1} alt="" /></span>
                                </div>
                                <div className="quotes-btn-group">
                                    <button type="button" className="btn blue-btn">View</button>
                                    <button type="button" className="btn green-btn">Buy</button>
                                </div>
                            </div>
                            <ul className="quotes-box-bottom">
                                <li>
                                    <p>Auto Insurance<span>(Standalone)</span></p>
                                    <p>$120.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Home Insurance<span>(Standalone)</span></p>
                                    <p>$92.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Auto + Home Insurance<span>(Bundle discount applied)</span></p>
                                    <p>$198.00<span>/month</span></p>
                                </li>
                            </ul>
                        </div>
                        <div className="quotes-box-innr">
                            <div className="quotes-box-top">
                                <div className="quote-logo-innr">
                                    <span><img src={logo2} alt="" /></span>
                                </div>
                                <div className="quotes-btn-group">
                                    <button type="button" className="btn blue-btn">View</button>
                                    <button type="button" className="btn green-btn">Buy</button>
                                </div>
                            </div>
                            <ul className="quotes-box-bottom">
                                <li>
                                    <p>Auto Insurance<span>(Standalone)</span></p>
                                    <p>$135.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Home Insurance<span>(Standalone)</span></p>
                                    <p>$155.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Life Insurance<span>(Standalone)</span></p>
                                    <p>$120.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Auto + Home Insurance<span>(Bundle discount applied)</span></p>
                                    <p>$220.00<span>/month</span></p>
                                </li>
                            </ul>
                        </div>
                        <div className="quotes-box-innr declined">
                            <div className="quotes-box-top">
                                <div className="quote-logo-innr">
                                    <span><img src={logo1} alt="" /></span>
                                    <p className="declined-txt">Declined</p>
                                </div>
                                <div className="quotes-btn-group">
                                    <button type="button" className="btn blue-btn">View</button>
                                    <button type="button" className="btn green-btn">Buy</button>
                                </div>
                            </div>
                            <ul className="quotes-box-bottom">
                                <li>
                                    <p>Auto Insurance<span>(Standalone)</span></p>
                                    <p>$120.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Home Insurance<span>(Standalone)</span></p>
                                    <p>$92.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Auto + Home Insurance<span>(Bundle discount applied)</span></p>
                                    <p>$198.00<span>/month</span></p>
                                </li>
                            </ul>
                        </div>
                        <div className="quotes-box-innr current-carrier">
                            <div className="quotes-box-top">
                                <div className="quote-logo-innr">
                                    <span><img src={logo2} alt="" /></span>
                                    <p className="current-carrier-txt">Current Carrier</p>
                                </div>
                                <div className="quotes-btn-group">
                                    <button type="button" className="btn blue-btn">View</button>
                                    <button type="button" className="btn green-btn">Buy</button>
                                </div>
                            </div>
                            <ul className="quotes-box-bottom">
                                <li>
                                    <p>Auto Insurance<span>(Standalone)</span></p>
                                    <p>$135.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Home Insurance<span>(Standalone)</span></p>
                                    <p>$155.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Life Insurance<span>(Standalone)</span></p>
                                    <p>$120.00<span>/month</span></p>
                                </li>
                                <li>
                                    <p>Auto + Home Insurance<span>(Bundle discount applied)</span></p>
                                    <p>$220.00<span>/month</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyQuotes;
