import { Link } from "react-router-dom";
const DeclineQuote = () => {
    return (
        <div className="modal-box text-center back-wh">
            <div className="modal-box-body">
                <div className="mb-40">
                    <h3 className="color-red mb-0">Decline Quote</h3>
                </div>
                <div className="mb-40">
                    <p className="frm-hdr font-18">Please choose reason why you are declining the quote.</p>
                    <form action="">
                        <div className="form-group mb-0">
                            <label className="form-label float">Reason</label>
                            <select name="" id="" className="form-control">
                                <option value="1" disabled>Select</option>
                                <option value="1">Select</option>
                                <option value="1">Select</option>
                            </select>
                        </div>
                    </form>
                    <p className="mt-1">This information will be shared with the agency.</p>
                </div>
            </div>
            <div className="modal-box-footer">
                <button type="button" className="btn red-btn w-100">Decline Quote</button>
                <Link to="/" className="go-back">Go Back</Link>
            </div>
        </div>
    )
};

export default DeclineQuote;