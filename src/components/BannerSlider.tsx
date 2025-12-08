import { Link } from "react-router-dom";
import Slider from "react-slick";
import banImg from "../assets/images/ban-1.png"
import banImg1 from "../assets/images/ban-2.png"
import banImg2 from "../assets/images/ban-3.png"
import banImg3 from "../assets/images/ban-4.png"
const BannerSlider = () => {
    const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
            <div className="ban-slide">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="banner-content">
                            <h1>Start your insurance profile today</h1>
                            <p>Create Your Profile Once, Get Personalized Quotes from Top Insurance Agencies, and Understand exactly what affects your rates - all without the phone calls. </p>
                            <Link to="/" className="btn red-btn lg">Get Started Today</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <figure className="ban-img"><img src={banImg} alt="" /></figure>
                    </div>
                </div>
            </div>
            <div className="ban-slide">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="banner-content">
                            <h1>Everyone connected in your insurance Circle</h1>
                            <p>Each driver creates their own profile and connects to the main insured. All details stay linked so your household is accurate, organized, and ready to shop together.</p>
                            <Link to="/" className="btn red-btn lg">Get Started Today</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <figure className="ban-img"><img src={banImg1} alt="" /></figure>
                    </div>
                </div>
            </div>
            <div className="ban-slide">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="banner-content">
                            <h1>No Spam. No Gimmicks. Get Real Quotes.</h1>
                            <p>You always know where your information goes, and you never get bombarded with random calls. </p>
                            <Link to="/" className="btn red-btn lg">Get Started Today</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <figure className="ban-img"><img src={banImg2} alt="" /></figure>
                    </div>
                </div>
            </div>
            <div className="ban-slide">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="banner-content">
                            <h1>What is Your Mode?</h1>
                            <p>Choose between Shopping Mode or Content Mode. You decide how you want to shop.</p>
                            <Link to="/" className="btn red-btn lg">Get Started Today</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <figure className="ban-img"><img src={banImg3} alt="" /></figure>
                    </div>
                </div>
            </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;