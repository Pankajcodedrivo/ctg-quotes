import Slider from "react-slick";
import CustomerSlide from "./CustomerSlide";
const CustomerSlider = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
            <CustomerSlide 
            name= "Sarah M."
            desc= "Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus."
            time= "$340/Year"
            add= "Austin, TX"
            text= "Saved"
            />
            <CustomerSlide 
            name= "Sarah M."
            desc= "Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus."
            time= "$340/Year"
            add= "Austin, TX"
            text= "Saved"
            />
            <CustomerSlide 
            name= "Sarah M."
            desc= "Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus."
            time= "$340/Year"
            add= "Austin, TX"
            text= "Saved"
            />
            <CustomerSlide 
            name= "Sarah M."
            desc= "Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus."
            time= "$340/Year"
            add= "Austin, TX"
            text= "Saved"
            />
      </Slider>
    </div>
  );
};

export default CustomerSlider;