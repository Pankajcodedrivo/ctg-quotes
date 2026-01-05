import { Link } from "react-router-dom";
interface CardProps {
  heading: string;
  desc: string;
  img:string;
}
const BanSlide = ({ heading, desc, img }: CardProps) => {
    return (
        <div className="ban-slide">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="banner-content">
                        <h1>{heading}</h1>
                        <p>{desc}</p>
                        <Link to="/step-1" className="btn red-btn lg">Get Started Today</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <figure className="ban-img"><img src={img} alt="" /></figure>
                </div>
            </div>
        </div>
    )
};

export default BanSlide;