import { Link } from "react-router-dom";
import rightArrow from "../../assets/images/right-arrow.svg"
import LeftPanel from "../../components/LeftPanel";
import SubFooter from "../../components/SubFooter";
import SubHeader from "../../components/SubHeader";

const Login = () => {
    return (
        <section className="auth-wrapper">
            <LeftPanel title="The more you know, the better you choose" subtitle="CTG Quotes Original" />
            <div className="right-panel">
                <div className="form-top">
                    <SubHeader />
                    <div className="auth-form">
                        <form action="">
                            <div className="mb-40">
                                <h4>Welcome Back!</h4>
                                <p>Enter your email and password to access your account.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label float">Email Address *</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label float">Password *</label>
                                        <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" />
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
                            <div className="text-center">
                                <Link to="/" className="btn btn-primary">Login <span><img src={rightArrow} alt="" /></span></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <SubFooter />
            </div>
        </section>
    )
};

export default Login;
