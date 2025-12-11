import { Link } from "react-router-dom";
const ProfileCreationLoader = () => {
    return (
        <div className="profile-creation">
            <div className="container">
                <div className="spinner-border"></div>
                <h2>Creating Your Account...</h2>
                <p>Some carriers may require additional information to provide an accurate quote.
                    We’ll notify you by message if needed.</p>
                <div className="bottom-footer">
                    <div className="sub-footer text-center">
                        <p className="copiright">© 2025 <span>CTG Quotes.</span> All rights reserved.  <Link to="/">Privacy Policy</Link>  |  <Link to="/">Terms & Conditions</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileCreationLoader;