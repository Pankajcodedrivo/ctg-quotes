import rating from "../assets/images/rating.png"
import Slider from "react-slick";
const CustomerSlider = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
            <div className="customer-slide">
                <div className="customer-box">
                    <span className="rating"><img src={rating} alt="" /></span>
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus.</p>
                    <div className="customer-bottom">
                        <div className="customer-left">
                            <h3>Sarah M.</h3>
                            <p>Austin, TX</p>
                        </div>
                        <div className="customer-right">
                            <h4>Saved</h4>
                            <p>$340/Year</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-slide">
                <div className="customer-box">
                    <span className="rating"><img src={rating} alt="" /></span>
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus.</p>
                    <div className="customer-bottom">
                        <div className="customer-left">
                            <h3>Sarah M.</h3>
                            <p>Austin, TX</p>
                        </div>
                        <div className="customer-right">
                            <h4>Saved</h4>
                            <p>$340/Year</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-slide">
                <div className="customer-box">
                    <span className="rating"><img src={rating} alt="" /></span>
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus.</p>
                    <div className="customer-bottom">
                        <div className="customer-left">
                            <h3>Sarah M.</h3>
                            <p>Austin, TX</p>
                        </div>
                        <div className="customer-right">
                            <h4>Saved</h4>
                            <p>$340/Year</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-slide">
                <div className="customer-box">
                    <span className="rating"><img src={rating} alt="" /></span>
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus.</p>
                    <div className="customer-bottom">
                        <div className="customer-left">
                            <h3>Sarah M.</h3>
                            <p>Austin, TX</p>
                        </div>
                        <div className="customer-right">
                            <h4>Saved</h4>
                            <p>$340/Year</p>
                        </div>
                    </div>
                </div>
            </div>
      </Slider>
    </div>
  );
};

export default CustomerSlider;