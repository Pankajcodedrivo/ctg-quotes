import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormikProvider, useFormik } from "formik";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import Step from "../../../components/Step";
import OtpInput from "../../../components/form/OtpInput";
import FormInput from "../../../components/form/FormInput";
import FormSelect from "../../../components/form/FormSelect";
import { updateStepData, setStep } from "../../../store/registerSlice";
import { registerStep1Schema } from "../../../validation/validationSchema";
import infoIcon from "../../../assets/images/info-icon-1.svg";
import eyeOpen from "../../../assets/images/eye-light.svg";
import eyeClosed from "../../../assets/images/eye-off.svg";
import rightArrow from "../../../assets/images/right-arrow.svg";
import check from "../../../assets/images/check.svg";
import { genderOptions, maritalStatusOptions } from "../../../constants/dropdownOptions";
import { sendOtpEmail, sendOtpPhone, verifyOtp } from "../../../service/register.service";
import { showSuccessToast } from "../../../utils/toast/toast";
import { useNavigate } from "react-router-dom";
type VerifyOtpPayload = {
  otpdata: string;
  phone?: string;
  email?: string;
};
const Setup1 = () => {
  const dispatch = useDispatch();
  const step1Data = useSelector((state: any) => state.register.step1);
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [showPhoneOtp, setShowPhoneOtp] = useState(false);
  const [emailCountdown, setEmailCountdown] = useState(0);
  const [phoneCountdown, setPhoneCountdown] = useState(0);
  const [emailButtonText, setEmailButtonText] = useState("Verify");
  const [phoneButtonText, setPhoneButtonText] = useState("Verify");
  const emailCountdownKey = "emailOtpCountdown";
  const phoneCountdownKey = "phoneOtpCountdown";
  const countdownSeconds = 59;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: step1Data,
    validationSchema: registerStep1Schema,
    onSubmit: (values) => {
      dispatch(updateStepData({ step: "step1", data: values }));
      dispatch(setStep(2));
      navigate("/step-2");
    },
  });

  // Initialize countdown from sessionStorage
  useEffect(() => {
    const storedEmail = sessionStorage.getItem(emailCountdownKey);
    if (storedEmail) {
      const remaining = Math.ceil((Number(storedEmail) - Date.now()) / 1000);
      if (remaining > 0) setEmailCountdown(remaining);
    }
    const storedPhone = sessionStorage.getItem(phoneCountdownKey);
    if (storedPhone) {
      const remaining = Math.ceil((Number(storedPhone) - Date.now()) / 1000);
      if (remaining > 0) setPhoneCountdown(remaining);
    }
  }, []);

  // Countdown effects
  useEffect(() => {
    let timer: number;
    if (emailCountdown > 0) {
      setEmailButtonText(`Resend ${emailCountdown}s`);
      timer = setTimeout(() => setEmailCountdown(emailCountdown - 1), 1000);
    } else if (emailCountdown === 0 && showEmailOtp) {
      setEmailButtonText("Resend");
      sessionStorage.removeItem(emailCountdownKey);
    } else {
      setEmailButtonText("Verify");
    }
    return () => clearTimeout(timer);
  }, [emailCountdown, showEmailOtp]);

  useEffect(() => {
    let timer: number;
    if (phoneCountdown > 0) {
      setPhoneButtonText(`Resend ${phoneCountdown}s`);
      timer = setTimeout(() => setPhoneCountdown(phoneCountdown - 1), 1000);
    } else if (phoneCountdown === 0 && showPhoneOtp) {
      setPhoneButtonText("Resend");
      sessionStorage.removeItem(phoneCountdownKey);
    } else {
      setPhoneButtonText("Verify");
    }
    return () => clearTimeout(timer);
  }, [phoneCountdown, showPhoneOtp]);

  // Reset OTP & button when input changes
  useEffect(() => {
    setShowEmailOtp(false);
    setEmailCountdown(0);
    setEmailButtonText("Verify");
    sessionStorage.removeItem(emailCountdownKey);
  }, [formik.values.email]);

  useEffect(() => {
    setShowPhoneOtp(false);
    setPhoneCountdown(0);
    setPhoneButtonText("Verify");
    sessionStorage.removeItem(phoneCountdownKey);
  }, [formik.values.phone]);

  const handleEmailVerify = async() => {
    try{
      const resp = await sendOtpEmail({email:formik.values.email});
      if(resp){
        showSuccessToast(resp.message);
      }
      setShowEmailOtp(true);
      setEmailCountdown(countdownSeconds);
      sessionStorage.setItem(emailCountdownKey, (Date.now() + countdownSeconds * 1000).toString());
      console.log("Send email OTP");
    }catch(e){

    }
    
  };

  const handlePhoneVerify = async() => {
    try{
      const resp = await sendOtpPhone({phone:formik.values.phone});
      if(resp){
        showSuccessToast(resp.message);
      }
      setShowPhoneOtp(true);
      setPhoneCountdown(countdownSeconds);
      sessionStorage.setItem(phoneCountdownKey, (Date.now() + countdownSeconds * 1000).toString());
      console.log("Send phone OTP");
    }catch(e){
      
    }
   
  };
 

  const checkVerifyOtp = async (
    otp: string,
    value: string,
    type: "phone" | "email"
  ) => {
    try {
      const payload: VerifyOtpPayload = { otpdata:otp };
      if (type === "phone") {
        payload.phone = value;
      } else {
        payload.email = value;
      }
      const resp = await verifyOtp(payload);
      if (resp) {
        showSuccessToast(resp.message);
         dispatch(
        updateStepData({
          step: "step1",
          data:
            type === "email"
              ? { emailVerified: true }
              : { phoneVerified: true },
        })
      );
      }
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <section className="auth-wrapper">
      <LeftPanelRegister title="Personal Information" subtitle="" img={infoIcon} />
      <div className="right-panel register">
        <div className="form-top">
          <SubHeader />
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <Step stepNumber={1} />

              <div className="auth-form">
                <div className="mb-40">
                  <div className="mb-4"><h4>Let’s Get Started</h4></div>
                  <div className="row">
                    <div className="col-xl-6">
                      <FormInput
                        name="firstName"
                        placeholder="Enter Name"
                        label={<>First Name <span>(as it appears on Driver License)</span></>}
                        labelClass="float"
                        required={true}
                      />
                    </div>
                    <div className="col-xl-6">
                      <FormInput
                        name="lastName"
                        placeholder="Enter Name"
                        label={<>Last Name <span>(as it appears on Driver License)</span></>}
                        labelClass="float"
                        required={true}
                      />
                    </div>
                    <div className="col-xl-6">
                      <FormInput
                        name="dob"
                        type="date"
                        placeholder="Select DOB"
                        label={<>Birthday <span>(DOB)</span></>}
                        inputClass="date-input"
                        labelClass="float"
                        required={true}
                      />
                    </div>
                    <div className="col-xl-6">
                      <p className="form-txt">
                        You must be 18 or older to create an account. If you’re under 18, please have the main insured add you manually.
                      </p>
                    </div>
                    <div className="col-xl-6">
                      <FormSelect
                        name="maritalStatus"
                        label="Marital Status"
                        options={maritalStatusOptions}
                        formGroupClass="mb-0"
                        labelClass="float"
                      />
                    </div>
                    <div className="col-xl-6">
                      <FormSelect
                        name="gender"
                        label={<>Gender <span>(as it appears on Driver License)</span></>}
                        options={genderOptions}
                        formGroupClass="mb-0"
                        labelClass="float"
                        required={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Login & Contact Information */}
                <div>
                  <div className="mb-4"><h4>Login & Contact Information</h4></div>
                  <div className="row">
                    <div className="col-xl-6">
                      <FormInput
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        label="Email Address"
                        labelClass="float"
                        wrapperClass="verify-innr"
                        required={true}
                        buttonText={emailButtonText}
                        disableButton={
                            emailCountdown > 0 || !formik.values.email || !!formik.errors.email
                        }
                        onActionClick={handleEmailVerify}
                      />
                      {showEmailOtp && (
                        <div className="form-group">
                          <label className="form-label">Security Code  {(step1Data.emailVerified)?<span className="ms-1"><img src={check} alt="" /></span>:''}</label>
                          <OtpInput length={4} disabled={step1Data.emailVerified} onChange={(otp) =>  (otp.length>3)?checkVerifyOtp(otp,formik.values.email,'email'):null} />
                        </div>
                      )}
                    </div>

                    <div className="col-xl-6">
                      <FormInput
                        name="phone"
                        type="tel"
                        placeholder="Enter Number"
                        label="Phone Number"
                        wrapperClass="verify-innr"
                        labelClass="float"
                        required={true}
                        buttonText={phoneButtonText}
                        disableButton={
                            phoneCountdown > 0 || !formik.values.phone || !!formik.errors.phone
                        }
                        onActionClick={handlePhoneVerify}
                      />
                      {showPhoneOtp && (
                        <div className="form-group">
                          <label className="form-label">Security Code {(step1Data.phoneVerified)?<span className="ms-1"><img src={check} alt="" /></span>:''}</label>
                          <OtpInput length={4} disabled={step1Data.phoneVerified} onChange={(otp) => (otp.length>3)? checkVerifyOtp(otp,formik.values.phone,'phone') : null} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Password Fields */}
                  <div className="row">
                    <div className="col-xl-6">
                      <FormInput
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        label="Create Password"
                        labelClass="float"
                        required={true}
                        icon={eyeClosed}
                        activeIcon={eyeOpen}
                      />
                    </div>
                    <div className="col-xl-6">
                      <FormInput
                        name="confirmPassword"
                        type="password"
                        required={true}
                        placeholder="Re-enter Password"
                        label="Re-enter Password"
                        labelClass="float"
                        icon={eyeClosed}
                        activeIcon={eyeOpen}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-end mt-40">
                <button type="submit" className="btn btn-primary">
                  Save & Continue <span><img src={rightArrow} alt="" /></span>
                </button>
              </div>
            </form>
          </FormikProvider>
        </div>
        <SubFooter />
      </div>
    </section>
  );
};

export default Setup1;
