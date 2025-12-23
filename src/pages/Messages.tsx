import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import chatImg1 from "../assets/images/img-1.jpg"
import chatImg2 from "../assets/images/img-2.jpg"
import chatImg3 from "../assets/images/img-3.jpg"
import chatImg4 from "../assets/images/img-4.jpg"
import dotIcon from "../assets/images/dot-icon.png"
import { Link } from "react-router-dom";

const Messages = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right pb-0">
                    <div className="chat-screen">
                        <div className="row h-100 m-0">
                            <div className="col-md-3 h-100 p-0">
                                <div className="chat-left">
                                    <div className="chat-left-top">
                                        <h3>Messages</h3>
                                        <div className="chat-search-box">
                                            <input type="text" placeholder="Search..." className="form-control" />
                                        </div>
                                    </div>
                                    <div className="chat-left-bottom">
                                        <ul className="chat-list">
                                            <li>
                                                <div className="chat-list-left">
                                                    <div className="chat-list-img">
                                                        <figure><img src={chatImg1} alt="" /></figure>
                                                    </div>
                                                    <div className="chat-list-txt">
                                                        <h4>Killan James</h4>
                                                    </div>
                                                </div>
                                                <div className="chat-list-right">
                                                    <span>4:30 PM</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="chat-list-left">
                                                    <div className="chat-list-img">
                                                        <figure><img src={chatImg2} alt="" /></figure>
                                                    </div>
                                                    <div className="chat-list-txt">
                                                        <h4>Design Team</h4>
                                                        <p>Hello! Everyone</p>
                                                    </div>
                                                </div>
                                                <div className="chat-list-right">
                                                    <span>9:36 AM</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="chat-list-left">
                                                    <div className="chat-list-img">
                                                        <figure><img src={chatImg3} alt="" /></figure>
                                                    </div>
                                                    <div className="chat-list-txt">
                                                        <h4>Ahmed Medi</h4>
                                                        <p>Wow really Cool 🔥</p>
                                                    </div>
                                                </div>
                                                <div className="chat-list-right">
                                                    <span>1:15 AM</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 h-100 p-0">
                                <div className="chat-right">
                                    <div className="chat-right-top">
                                        <div className="chat-right-wrapper">
                                            <div className="chat-right-img">
                                                <figure><img src={chatImg4} alt="" /></figure>
                                            </div>
                                            <div className="chat-right-txt">
                                                <h3>Design Team</h3>
                                            </div>
                                        </div>
                                        <div className="chat-dropdown dropdown">
                                            <span className="dropdown-toggle" data-bs-toggle="dropdown"><img src={dotIcon} alt="" /></span>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/">Link 1</Link></li>
                                                <li><Link to="/">Link 2</Link></li>
                                                <li><Link to="/">Link 3</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="chat-right-bottom">
                                        <div className="right-window">
                                            <div className="message">
                                                <div className="message-innr">
                                                    <p>Hello</p>
                                                </div>
                                            </div>
                                            <span className="time">Today, 8.33pm</span>
                                        </div>
                                        <div className="left-window">
                                            <div className="message">
                                                <div className="message-innr">
                                                    <p>Hello</p>
                                                </div>
                                            </div>
                                            <span className="time">Today, 8.33pm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Messages;