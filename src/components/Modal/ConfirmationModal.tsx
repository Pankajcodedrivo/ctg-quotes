import { Link } from "react-router-dom";
import icon1 from "../../assets/images/list-3.svg"
import icon2 from "../../assets/images/list-4.svg"
const ConfirmationModal = () => {
    return (
        <div className="modal-box text-center">
            <div className="modal-box-body">
                <div className="mb-32">
                    <h3 className="color-blue">Confirm Before You Shop</h3>
                </div>
                <div className="mb-40">
                    <ul className="info-list">
                        <li>
                            <span className="info-list-icon"><img src={icon1} alt="" /></span>
                            <div className="info-list-txt">
                                <h5>All profiles are complete and ready to quote.</h5>
                                <p>Once you continue, your information will only be shared with the licensed agencies generating your quotes.</p>
                            </div>
                        </li>
                        <li>
                            <span className="info-list-icon"><img src={icon2} alt="" /></span>
                            <div className="info-list-txt">
                                <h5>This action cannot be undone even if you change your mind later.</h5>
                                <p>If you need to make changes or have questions about your quotes, you can message the agency directly through your dashboard.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="modal-box-footer">
                <button type="button" className="btn btn-primary w-100">Confirm and Enter Shopping Mode</button>
                <Link to="/" className="go-back">Go Back</Link>
            </div>
        </div>
    )
};

export default ConfirmationModal;