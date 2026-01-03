import { useDispatch, useSelector } from "react-redux";
import { FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import Step from "../../../components/Step";

import FormInput from "../../../components/form/FormInput";
import FormSelect from "../../../components/form/FormSelect";

import { updateStepData, setStep } from "../../../store/registerSlice";
import { usStateOptions } from "../../../constants/dropdownOptions";

import Icon2 from "../../../assets/images/icon-2.svg";
import rightArrow from "../../../assets/images/right-arrow.svg";
import leftArrow from "../../../assets/images/left-arrow.svg";
import { registerStep2Schema } from "../../../validation/validationSchema";
import LeftPanelRegister from "../../../components/LeftPanelRegister";

const Setup2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const step2Data = useSelector((state: any) => state.register.step2);

  const formik = useFormik({
    initialValues: step2Data,
    validationSchema: registerStep2Schema,
    onSubmit: (values) => {
      dispatch(updateStepData({ step: "step2", data: values }));

      if (values.state === "TX") {
        dispatch(setStep(3));
        navigate("/step-3");
      }
    },
  });

  const isTexas = formik.values.state === "TX";

  return (
    <section className="auth-wrapper">
      <LeftPanelRegister title="Location" img={Icon2} />

      <div className="right-panel register">
        <SubHeader />

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Step stepNumber={2} />

            <div className="auth-form">
              <div className="row">
                <div className="col-md-12">
                  <FormInput
                    name="address"
                    label="Where do you live?"
                    labelClass="float"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <FormInput
                    name="unit"
                    label="Unit / Apt"
                    labelClass="float"
                  />
                </div>

                {/* CITY — text input */}
                <div className="col-lg-6">
                  <FormInput
                    name="city"
                    label="City"
                    labelClass="float"
                    required
                  />
                </div>

                {/* STATE — CTG dropdown */}
                <div className="col-lg-6">
                  <FormSelect
                    name="state"
                    label="State"
                    labelClass="float"
                    options={usStateOptions}
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <FormInput
                    name="zipCode"
                    label="Zip Code"
                    labelClass="float"
                    required
                  />
                </div>

                {!isTexas && formik.values.state && (
                  <div className="col-md-12">
                    <textarea
                        readOnly
                      className="form-control"
                      disabled
                      value="Great news! We’re coming to your state soon. You’ve been added to our waitlist, and we’ll email you as soon as we’re live."
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="btn-flex mt-40">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  dispatch(setStep(1));
                  navigate("/step-1");
                }}
              >
                <span><img src={leftArrow} alt="" /></span> Back
              </button>

              <button type="submit" className="btn btn-primary">
                {isTexas ? "Save & Continue" : "Notify Me"}
                <span><img src={rightArrow} alt="" /></span>
              </button>
            </div>
          </form>
        </FormikProvider>

        <SubFooter />
      </div>
    </section>
  );
};

export default Setup2;
