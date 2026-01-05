import { FormikProvider } from "formik";
import rightArrow from "../../../assets/images/right-arrow.svg"
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import { useResetPass } from "./useResetPass";
import FormInput from "../../../components/form/FormInput";
import eyeOpen from "../../../assets/images/eye-light.svg";
import eyeClosed from "../../../assets/images/eye-off.svg";

const ResetPassword = () => {
    const email = localStorage.getItem("email") || "";
    const { resetPasswordFormik } = useResetPass(email);
    return (
        <section className="auth-wrapper">
            <LeftPanel title="An investment in knowledge pays the best interest." subtitle="Benjamin Franklin" />
            <div className="right-panel">
                <div className="form-top">
                    <SubHeader />
                    <FormikProvider value={resetPasswordFormik}>
                    <form onSubmit={resetPasswordFormik.handleSubmit}>
                        <div className="auth-form">
                            <div className="mb-40">
                                <h4>Reset Password</h4>
                                <p>Please enter your new password</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                     <FormInput
                                        name="password"
                                        type="password"
                                        placeholder="Enter Password"
                                        label="Password"
                                        labelClass="float"
                                        required
                                        icon={eyeClosed}
                                        activeIcon={eyeOpen}
                                        />
                                </div>
                                <div className="col-lg-6">
                                     <FormInput
                                        name="cpassword"
                                        type="password"
                                        placeholder="Enter Confirm Password"
                                        label="Confirm Password"
                                        labelClass="float"
                                        required
                                        icon={eyeClosed}
                                        activeIcon={eyeOpen}
                                        />
                                </div>
                            </div>
                            <div className="text-center mt-40">
                                <button className="btn btn-primary" type="submit">
                                    Reset Password <span><img src={rightArrow} alt="" /></span>
                                </button>
                            </div>
                        </div>
                    </form>
                    </FormikProvider>
                </div>
                <SubFooter />
            </div>
        </section>
    )
};
export default ResetPassword;