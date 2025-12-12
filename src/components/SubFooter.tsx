import { Link } from "react-router-dom";
const SubFooter = () => {
    return (
        <div className="sub-footer text-center">
            {/* login */}
            <p>Already have an account? <Link to="/">Log In</Link></p>
            {/* register */}
            {/* <p>Already have an account?  <Link to="/"> Log In</Link></p> */}
            <p className="copiright">© 2025 <span>CTG Quotes.</span> All rights reserved.  <Link to="/">Privacy Policy</Link>  |  <Link to="/">Terms & Conditions</Link></p>
        </div>
    )
};

export default SubFooter;