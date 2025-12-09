import { Link } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import brandLogo1 from "../assets/images/logo-1.svg"
import brandLogo2 from "../assets/images/logo-2.svg"
import brandLogo3 from "../assets/images/logo-3.svg"
import brandLogo4 from "../assets/images/logo-4.svg"
import brandLogo5 from "../assets/images/logo-5.svg"
import brandLogo6 from "../assets/images/logo-6.svg"
import ficon1 from "../assets/images/icon1.svg"
import ficon2 from "../assets/images/icon2.svg"
import ficon3 from "../assets/images/icon3.svg"
import ficon4 from "../assets/images/icon4.svg"
import whyIcon1 from "../assets/images/why-icon-1.svg"
import whyIcon2 from "../assets/images/why-icon-2.svg"
import whyIcon3 from "../assets/images/why-icon-3.svg"
import vs1 from "../assets/images/vs-1.svg"
import vs2 from "../assets/images/vs-2.svg"
import vs3 from "../assets/images/vs-3.svg"
import vs4 from "../assets/images/vs-4.svg"
import ctglogo from "../assets/images/ctglogo.svg"
import icn1 from "../assets/images/icn1.svg"
import icn2 from "../assets/images/icn2.svg"
import icn3 from "../assets/images/icn3.svg"
import icn4 from "../assets/images/icn4.svg"
import icn5 from "../assets/images/icn5.svg"
import whyConsumerImg from "../assets/images/why-consumer-pic.png"
import appStore from "../assets/images/app-store.png"
import googlePlay from "../assets/images/google-play.png"
import Newsletter from "../components/Newsletter";
import CustomerSlider from "../components/CustomerSlider";
import FeaturesBox from "../components/FeaturesBox";
import WhyChooseBox from "../components/WhyChooseBox";
const Home = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="banner-slider">
                        <BannerSlider />
                    </div>
                </div>
            </section>
            <div className="brand-sec">
                <div className="container">
                    <div className="brand-outr">
                        <div className="brand-logo-wrapper">
                            <div className="brand-logo">
                                <img src={brandLogo1} alt="" />
                            </div>
                            <div className="brand-logo">
                                <img src={brandLogo2} alt="" />
                            </div>
                            <div className="brand-logo">
                                <img src={brandLogo3} alt="" />
                            </div>
                            <div className="brand-logo">
                                <img src={brandLogo4} alt="" />
                            </div>
                            <div className="brand-logo">
                                <img src={brandLogo5} alt="" />
                            </div>
                            <div className="brand-logo">
                                <img src={brandLogo6} alt="" />
                            </div>
                        </div>
                        <Link to="/" className="brand-more">50+ <br />More</Link>
                    </div>
                </div>
            </div>
            <section className="common-gap">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-lg-3 col-md-6">
                            <FeaturesBox title="Auto" desc="Average savings of over $800" img={ficon1} />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <FeaturesBox title="Property" desc="Home, renters, condo & more" img={ficon2} />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <FeaturesBox title="Bundle & Save" desc="Auto + home, renters or condo" img={ficon3} />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <FeaturesBox title="Life" desc="Term life, whole life & more" img={ficon4} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose-sec">
                <div className="container">
                    <div className="cmn-hdr text-center">
                        <h2>Why Choose CTG Quotes?</h2>
                        <p>Revolutionizing how you shop for insurance</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <WhyChooseBox title="Full Transparency" desc="Understand exactly what factors affect your insurance rates with our educational tools and clear explanations." img={whyIcon1} />
                        </div>
                        <div className="col-md-4">
                            <WhyChooseBox title="No Phone Harassment" desc="Control when and how agencies contact you. Only provide your number when you’re ready to move forward." img={whyIcon2} />
                        </div>
                        <div className="col-md-4">
                            <WhyChooseBox title="Better Rates" desc="Compare personalized quotes from multiple agencies instantly and find the best coverage for your needs." img={whyIcon3} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-works-sec common-gap">
                <div className="container">
                    <div className="cmn-hdr text-center">
                        <h2>How CTG Quotes Works</h2>
                    </div>
                    <ul className="nav nav-pills tab-otr">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="pill" href="#tab1">
                                <span></span>
                                Create Your Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                                <span></span>
                                Set Your Status
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="pill" href="#tab3">
                                <span></span>
                                We Shop You With Top Agencies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="pill" href="#tab4">
                                <span></span>
                                Choose Contact Preference
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="pill" href="#tab5">
                                <span></span>
                                Get Real Quotes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="pill" href="#tab6">
                                <span></span>
                                Buy Your Best Quotes
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="tab1">
                            <div className="why-works-otr">
                                <div className="row m-0">
                                    <div className="col-md-5 p-0 w-45">
                                        <div className="why-works-innr why-works-left">
                                            <div className="why-works-hdr"><img src={ctglogo} alt="" /></div>
                                            <div className="why-works">
                                                <ul className="d-block d-md-none mb-list">
                                                    <li>
                                                        <span><img src={vs1} alt="" /></span>
                                                        Accuracy
                                                    </li>
                                                    <li>
                                                        <span><img src={vs2} alt="" /></span>
                                                        On The Time
                                                    </li>
                                                    <li>
                                                        <span><img src={vs3} alt="" /></span>
                                                        Real Quotes
                                                    </li>
                                                    <li>
                                                        <span><img src={vs4} alt="" /></span>
                                                        Costs
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>Profile stays with you for life — never repeat information</li>
                                                    <li>You control your quotes & who calls you</li>
                                                    <li>Limit who has your information</li>
                                                    <li>Real, final rates, never hypotheticals</li>
                                                    <li>Family Tree keeps all drivers & coverage organized</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 p-0  w-10 d-none d-md-flex">
                                        <div className="why-works-mid">
                                            <div className="why-works-hdr">VS</div>
                                            <ul>
                                                <li>
                                                    <span><img src={vs1} alt="" /></span>
                                                    Accuracy
                                                </li>
                                                <li>
                                                    <span><img src={vs2} alt="" /></span>
                                                    On The Time
                                                </li>
                                                <li>
                                                    <span><img src={vs3} alt="" /></span>
                                                    Real Quotes
                                                </li>
                                                <li>
                                                    <span><img src={vs4} alt="" /></span>
                                                    Costs
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-5 p-0  w-45">
                                        <div className="why-works-innr why-works-right">
                                            <div className="why-works-hdr">Other Companies</div>
                                            <div className="why-works">
                                                <ul className="d-block d-md-none mb-list">
                                                    <li>
                                                        <span><img src={vs1} alt="" /></span>
                                                        Accuracy
                                                    </li>
                                                    <li>
                                                        <span><img src={vs2} alt="" /></span>
                                                        On The Time
                                                    </li>
                                                    <li>
                                                        <span><img src={vs3} alt="" /></span>
                                                        Real Quotes
                                                    </li>
                                                    <li>
                                                        <span><img src={vs4} alt="" /></span>
                                                        Costs
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>Re-enter information for every single quote</li>
                                                    <li>Endless spam calls from random agents</li>
                                                    <li>Information gets sold hundreds of times</li>
                                                    <li>Fake teaser rates — final price is higher</li>
                                                    <li>Countless forms, multiple callbacks to finish one quote, and wasted time</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab2">
                            <p>Tab 2</p>
                        </div>
                        <div className="tab-pane fade" id="tab3"><p>Tab 3</p></div>
                        <div className="tab-pane fade" id="tab4"><p>Tab 4</p></div>
                        <div className="tab-pane fade" id="tab5"><p>Tab 5</p></div>
                        <div className="tab-pane fade" id="tab6"><p>Tab 6</p></div>
                    </div>
                </div>
            </section>
            <section className="why-consumer-sec">
                <div className="container">
                    <div className="cmn-hdr text-center">
                        <h2>Why Consumers Love CTG Quotes?</h2>
                    </div>
                    <div className="row align-items-center g-5">
                        <div className="col-md-4 ordr-1">
                            <ul className="why-consumer-list">
                                <li>
                                    <span><img src={icn1} alt="" /></span>
                                    <h3>Lifetime profile that updated anytime life changes</h3>
                                </li>
                                <li>
                                    <span><img src={icn2} alt="" /></span>
                                    <h3>No more spam calls</h3>
                                </li>
                                <li>
                                    <span><img src={icn3} alt="" /></span>
                                    <h3>Real quotes from real agents</h3>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 ordr-2">
                            <figure className="mb-0 w-100"><img src={whyConsumerImg} alt="" /></figure>
                        </div>
                        <div className="col-md-4 ordr-3">
                            <ul className="why-consumer-list">
                                <li>
                                    <span><img src={icn4} alt="" /></span>
                                    <h3>Full transparency so you always know where your information goes</h3>
                                </li>
                                <li>
                                    <span><img src={icn5} alt="" /></span>
                                    <h3>Insurance circle keeps your household organized</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="app-btn text-center">
                        <Link to="/"><img src={appStore} alt="" /></Link>
                        <Link to="/"><img src={googlePlay} alt="" /></Link>
                    </div>
                </div>
            </section>
            <section className="customer-sec common-gap">
                <div className="container">
                    <div className="cmn-hdr text-center mb-44">
                        <h2>What Our Customers Say </h2>
                        <p>Real stories from real customers who saved money</p>
                    </div>
                    <div className="customer-slider">
                        <CustomerSlider />
                    </div>
                </div>
            </section>
            <Newsletter />
        </>
    )
};

export default Home;