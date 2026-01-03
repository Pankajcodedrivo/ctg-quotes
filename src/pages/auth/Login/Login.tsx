import { Link } from "react-router-dom";
import rightArrow from "../../../assets/images/right-arrow.svg"
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import eye from "../../../assets/images/eye-off.svg"

const Login = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanel title="The more you know, the better you choose" subtitle="CTG Quotes Original" />
            <div className="right-panel">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                        <div className="auth-form">
                            <div className="mb-40">
                                <h4>Welcome Back!</h4>
                                <p>Enter your email and password to access your account.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">Email Address *</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">Password *</label>
                                        <div className="password">
                                            <input type="password" className="form-control" placeholder="Enter Password" />
                                            <span className="password-icon">
                                                <img src={eye} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="remember-innr">
                                <label className="checkbox-container">Remember Me
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <Link to="/" className="forgot-password">Forgot Password?</Link>
                            </div>
                            <div className="text-center mt-40">
                                <Link to="/" className="btn btn-primary">Login <span><img src={rightArrow} alt="" /></span></Link>
                            </div>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
        </section>
    )
};

export default Login;
