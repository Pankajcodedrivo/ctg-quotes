import { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardLeft from "../../components/DashboardLeft";
import DashboardFooter from "../../components/DashboardFooter";
import arrow from "../../assets/images/long-arrow.svg";
import { useAccount } from "./useAccount";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { FormikProvider } from "formik";
import FormInput from "../../components/form/FormInput";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const { accountFormik, loading } = useAccount();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (user) {
      accountFormik.setValues({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        DOB: user.DOB
          ? new Date(user.DOB).toISOString().substring(0, 10)
          : "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        address: user.address || "",
      });
    }
  }, [user]);

  return (
    <div className="dashboard-wrapper">
      <DashboardHeader toggleMenu={toggleMenu} />

      <div className="dashboard-body">
        <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />

        <div className="dashboard-right">
          <div className="dash-hdr">
            <h3>My Account</h3>
            <p className="font-16">Manage your personal details.</p>
          </div>

          {/* PROFILE SUMMARY */}
          <div className="shadow-box blue-border mb-4 my-account">
            <h5>Profile Summary</h5>

            <FormikProvider value={accountFormik}>
              <form onSubmit={accountFormik.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <FormInput
                      name="firstName"
                      label="First Name"
                      labelClass="float"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <FormInput
                      name="lastName"
                      label="Last Name"
                      labelClass="float"
                      placeholder="Last Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <FormInput
                      name="DOB"
                      type="date"
                      label="Date of Birth"
                      labelClass="float"
                    />
                  </div>

                  <div className="col-md-6">
                    <FormInput
                      name="email"
                      type="email"
                      label="Email Address"
                      labelClass="float"
                      disabled
                    />
                  </div>

                  <div className="col-md-6">
                    <FormInput
                      name="phoneNumber"
                      type="tel"
                      label="Phone Number"
                      labelClass="float"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="col-md-6">
                    <FormInput
                      name="address"
                      label="Home Address"
                      labelClass="float"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn green-btn mb-w-100"
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Update"}
                      <span>
                        <img src={arrow} alt="" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </FormikProvider>
          </div>

          {/* DRIVER LICENSE */}
          
        <div className="shadow-box blue-border my-account"> 
        <h5>Driver License</h5> 
        <div className="row"> 
        <div className="col-md-6"> 
        <div className="form-group"> 
        <label className="form-label float">Driver License Number</label> 
        <input type="text" className="form-control" placeholder="*********12" /> 
        </div> 
        </div> 
        <div className="col-md-12"> 
        <button type="submit" className="btn green-btn mb-w-100">Request Update Driver License <span><img src={arrow} alt="" /></span></button> 
        </div> 
        </div>
        </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default MyAccount;
