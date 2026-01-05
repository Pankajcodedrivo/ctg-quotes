import { Link } from "react-router-dom";
const Newsletter = () => {
    return (
        <div className="newsletter-sec text-center">
            <div className="container">
                <div className="cmn-hdr mb-0 wh text-center">
                    <h2>Ready to Save on Insurance?</h2>
                    <p>Join thousands of customers who have already saved money with transparent, hassle-free insurance shopping.</p>
                </div>
                <Link to="/step-1" className="btn red-btn md">Start Saving Today</Link>
                <ul>
                    <li>Free to use</li>
                    <li>No hidden Fees</li>
                    <li>Cancel anytime</li>
                </ul>
            </div>
        </div>
    )
};

export default Newsletter;