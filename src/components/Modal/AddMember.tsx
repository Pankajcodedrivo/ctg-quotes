import { useState } from "react";
const AddMember = () => {
    const [active, setActive] = useState("section1");
    return (
        <div className="modal-box text-center back-wh width-lg">
            <div className="modal-box-body">
                <div className="mb-40">
                    <h3>Add a Member</h3>
                    <p className="font-24 mb-0 wd-lg">Would you like to invite them or manually enter their information?</p>
                </div>
                <div className="mb-40">
                    <form action="">
                        <div className="invite-method">
                            <div className="invite-tab">
                                <button type="button" className={active === "invite-tab-1" ? "active" : ""} onClick={() => setActive("invite-tab-1")}>Invite them to complete their own profile</button>
                                <button type="button" className={active === "invite-tab-2" ? "active" : ""} onClick={() => setActive("invite-tab-2")}>I will enter their information manually</button>
                            </div>
                            <div className="invite-method-content">
                                {active === "invite-tab-1" &&
                                    (
                                        <div className="form-wrapper">
                                            <div className="mb-40">
                                                <div className="form-group">
                                                    <label className="form-label">Select Invite Method:</label>
                                                    <ul className="radio-list">
                                                        <li>
                                                            <label className="radio-container">Email
                                                                <input type="radio" name="radio" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="radio-container">Phone
                                                                <input type="radio" name="radio" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <label className="form-label float">Email Address*</label>
                                                    <input type="email" className="form-control" placeholder="Enter email" />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">Send Invite</button>
                                        </div>
                                    )
                                }
                                {active === "invite-tab-2" &&
                                    (<div>
                                        <button type="submit" className="btn btn-primary w-100">Add Member Manually</button>
                                    </div>)
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AddMember;