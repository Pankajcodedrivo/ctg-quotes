import { Link } from "react-router-dom";
const DashboardFooter = () => {
    return (
        <div className="dashboard-footer">
            <p>© 2025 <span>CTG Quotes.</span> All rights reserved.  <Link to="/">Privacy Policy</Link>  |  <Link to="/">Terms & Conditions</Link></p>
        </div>
    )
};

export default DashboardFooter;