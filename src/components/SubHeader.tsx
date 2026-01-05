import innerLogo from "../assets/images/inner-logo.svg"
import { Link } from "react-router-dom";
const SubHeader = () => {
    return (
        <div className="sub-header text-center">
            <div className="innr-logo">
                <Link to="/"><img src={innerLogo} alt="" /></Link>
            </div>
        </div>
    )
};

export default SubHeader;