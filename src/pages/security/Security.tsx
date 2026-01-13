import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardLeft from "../../components/DashboardLeft";
import DashboardFooter from "../../components/DashboardFooter";
import arrow from "../../assets/images/long-arrow.svg"
import eyeOpen from "../../assets/images/eye-light.svg";
import eyeClosed from "../../assets/images/eye-off.svg";
import FormInput from "../../components/form/FormInput";
import { FormikProvider, useFormik } from "formik";
import { updateProfile } from "../../service/user.api";
import { changePasswordApi } from "../../service/register.service";
import { logOut } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { emailSchema, oldPasswordSchema, newPasswordSchema, confirmChangePasswordSchema } from "../../utils/yupSchemas";

const Security = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    const user = useSelector((state: any) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updatingEmail, setUpdatingEmail] = useState(false);
    const [updatingPassword, setUpdatingPassword] = useState(false);

    // Email update
    const emailFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: user?.email || "",
    },
    validationSchema: Yup.object({
      email: emailSchema
    }),
    onSubmit: async (values) => {
      if (values.email === user?.email) return;
      setUpdatingEmail(true);
      try {
        await updateProfile({ email: values.email });
        dispatch(logOut());
        localStorage.clear();
        navigate("/login");
      } catch (error) {
        console.error("Email update failed", error);
      } finally {
        setUpdatingEmail(false);
      }
    },
    });

    // Change password
    const passwordFormik = useFormik({
    initialValues: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    },
    validationSchema: Yup.object({
        oldPassword: oldPasswordSchema,
        newPassword: newPasswordSchema,
        confirmPassword: confirmChangePasswordSchema,
    }),
    onSubmit: async (values, { resetForm }) => {
        setUpdatingPassword(true);
        try {
        await changePasswordApi({
            password_new: values.newPassword,
            password_old: values.oldPassword,
        });
        resetForm();
        dispatch(logOut());
        localStorage.clear();
        navigate("/login");
        } catch (error) {
        console.error("Password update failed", error);
        } finally {
        setUpdatingPassword(false);
        }
    },
    });
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>Security</h3>
                        <p className="font-16">Manage your security settings with ease.</p>
                    </div>
                    <div className="shadow-box my-account">
                        <div className="mbl-30">
                            <h5>Change Email</h5>
                            <FormikProvider value={emailFormik}>
                            <form onSubmit={emailFormik.handleSubmit}>
                            <div className="row align-items-end mb-4 gy-2">
                                <div className="col-lg-6 col-md-8">
                                     <FormInput
                                        type="email"
                                        name="email"
                                        label="Email Address"
                                        placeholder="example@yahoo.com"
                                        required
                                    />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <button type="submit" 
                                        disabled={updatingEmail}
                                        className="btn green-btn hg-60 mb-w-100">
                                            {updatingEmail ? "Updating..." : "Update"}<span><img src={arrow} alt="" /></span>
                                    </button>
                                </div>
                            </div>
                            </form>
                            </FormikProvider>
                        </div>
                        <h5>Change Password</h5>
                        <FormikProvider value={passwordFormik}>
                        <form onSubmit={passwordFormik.handleSubmit}>
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="form-group">
                                    <div className="password">
                                    <FormInput
                                        name="oldPassword"
                                        type="password"
                                        placeholder="Enter Old Password"
                                        label="Old Password"
                                        labelClass="float"
                                        required
                                        icon={eyeClosed}
                                        activeIcon={eyeOpen}
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="form-group">
                                    <div className="password">
                                        <FormInput
                                        name="newPassword"
                                        type="password"
                                        placeholder="Enter New Password"
                                        label="New Password"
                                        labelClass="float"
                                        required
                                        icon={eyeClosed}
                                        activeIcon={eyeOpen}
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="form-group">
                                    <div className="password">
                                        <FormInput
                                            name="confirmPassword"
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
                            </div>
                            <div className="col-md-12">
                                <button type="submit" 
                                disabled={updatingPassword}
                                className="btn green-btn mb-w-100">
                                {updatingPassword ? "Updating..." : "Update"} <span><img src={arrow} alt="" /></span>
                                </button>
                            </div>
                        </div>
                        </form>
                        </FormikProvider>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Security;
