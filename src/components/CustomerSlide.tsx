import rating from "../assets/images/rating.png"
interface props {
  name: string;
  desc: string;
  time: string;
  add: string;
  text: string;
}
const CustomerSlide = ({name,desc,add,text,time}:props) => {
    return (
        <div className="customer-slide">
            <div className="customer-box">
                <span className="rating"><img src={rating} alt="" /></span>
                <p>{desc}</p>
                <div className="customer-bottom">
                    <div className="customer-left">
                        <h3>{name}</h3>
                        <p>{add}</p>
                    </div>
                    <div className="customer-right">
                        <h4>{text}</h4>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CustomerSlide;