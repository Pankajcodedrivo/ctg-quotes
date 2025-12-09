import { Link } from "react-router-dom";
import Slider from "react-slick";
import banImg from "../assets/images/ban-1.png"
import banImg1 from "../assets/images/ban-2.png"
import banImg2 from "../assets/images/ban-3.png"
import banImg3 from "../assets/images/ban-4.png"
import BanSlide from "./BanSlide";
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
            <BanSlide 
            heading="Start your insurance profile today" 
            desc="Create Your Profile Once, Get Personalized Quotes from Top Insurance Agencies, and Understand exactly what affects your rates - all without the phone calls." 
            img={banImg}
            />
            <BanSlide 
            heading="Everyone connected in your insurance Circle" 
            desc="Each driver creates their own profile and connects to the main insured. All details stay linked so your household is accurate, organized, and ready to shop together." 
            img={banImg1}
            />
            <BanSlide 
            heading="No Spam. No Gimmicks. Get Real Quotes." 
            desc="You always know where your information goes, and you never get bombarded with random calls." 
            img={banImg2}
            />
            <BanSlide 
            heading="What is Your Mode?" 
            desc="Choose between Shopping Mode or Content Mode. You decide how you want to shop." 
            img={banImg3}
            />
      </Slider>
    </div>
  );
};

export default BannerSlider;