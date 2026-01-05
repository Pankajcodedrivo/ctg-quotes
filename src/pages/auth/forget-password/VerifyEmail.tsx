import { FormikProvider } from "formik";
import rightArrow from "../../../assets/images/right-arrow.svg"
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import { useForgotPass } from "./useForgotPass";
import FormInput from "../../../components/form/FormInput";

const Login = () => {
    const { forgotPassFormik } = useForgotPass();
    return (
        <section className="auth-wrapper">
            <LeftPanel title="An investment in knowledge pays the best interest." subtitle="Benjamin Franklin" />
            <div className="right-panel">
                <div className="form-top">
                    <SubHeader />
                    <FormikProvider value={forgotPassFormik}>
                    <form onSubmit={forgotPassFormik.handleSubmit}>
                        <div className="auth-form">
                            <div className="mb-40">
                                <h4>Security Code</h4>
                                <p>We’ve sent a security code to your email address. Please check your inbox and enter the code below to continue.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                     <FormInput
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        label="Email Address"
                                        labelClass="float"
                                        wrapperClass="verify-innr"
                                        required
                                        />
                                </div>
                            </div>
                            <div className="text-center mt-40">
                                <button type="submit" className="btn btn-primary">
                                    Send Security Code <span><img src={rightArrow} alt="" /></span>
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

export default Login;
