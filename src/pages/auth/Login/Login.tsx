import { Link } from "react-router-dom";
import { FormikProvider } from "formik";
import rightArrow from "../../../assets/images/right-arrow.svg";
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import FormInput from "../../../components/form/FormInput";
import { useLogin } from "./useLogin";
import eyeOpen from "../../../assets/images/eye-light.svg";
import eyeClosed from "../../../assets/images/eye-off.svg";

const Login = () => {
  const { loginFormik } = useLogin();

  return (
    <section className="auth-wrapper">
      <LeftPanel
        title="The more you know, the better you choose"
        subtitle="CTG Quotes Original"
      />

      <div className="right-panel">
        <div className="form-top">
          <SubHeader />

          <FormikProvider value={loginFormik}>
            <form onSubmit={loginFormik.handleSubmit}>
              <div className="auth-form">
                <div className="mb-40">
                  <h4>Welcome Back!</h4>
                  <p>Enter your email and password to access your account.</p>
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
                </div>

                <div className="remember-innr">
                  <label className="checkbox-container">
                    Remember Me
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <Link to="/verify-email" className="forgot-password">
                    Forgot Password?
                  </Link>
                </div>

                <div className="text-center mt-40">
                  <button type="submit" className="btn btn-primary">
                    Login <span><img src={rightArrow} alt="" /></span>
                  </button>
                </div>
              </div>
            </form>
          </FormikProvider>
        </div>
        <SubFooter />
      </div>
    </section>
  );
};

export default Login;
