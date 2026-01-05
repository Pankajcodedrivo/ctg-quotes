import deleteIcon from "../../assets/images/delete-icon.svg"
const DeleteAccount = () => {
    return (
        <div className="modal-box text-center">
            <div className="modal-box-body">
                <span className="mb-14 delete-icon"><img src={deleteIcon} alt="" /></span>
                <div className="mb-40">
                    <h3>Delete Account</h3>
                    <p>Are you sure you want to delete your account?</p>
                </div>
            </div>
            <div className="modal-box-footer d-flex">
                <button type="button" className="btn btn-secondary w-100">No</button>
                <button type="button" className="btn red-btn clr-08 w-100">Yes</button>
            </div>
        </div>
    )
};

export default DeleteAccount;