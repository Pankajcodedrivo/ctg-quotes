import successIcon from "../../assets/images/success-icon.svg"
const CompleteYourProfile = () => {
    return (
        <div className="modal-box text-center">
            <div className="modal-box-body">
                <span className="success-icon mb-40"><img src={successIcon} alt="" /></span>
                <div className="mb-40">
                    <h3>Your CTG Account is Ready</h3>
                    <p>You’re all set. Inside your dashboard, you can update details for your home, vehicles, or family members and start getting tailored quote comparisons</p>
                </div>
            </div>
            <div className="modal-box-footer">
                <button type="button" className="btn btn-primary w-100">Go to Dashboard</button>
            </div>
        </div>
    )
};

export default CompleteYourProfile;