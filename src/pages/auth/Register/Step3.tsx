import { useDispatch, useSelector } from "react-redux";
import { FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import Step from "../../../components/Step";

import { updateStepData, setStep } from "../../../store/registerSlice";

import infoIcon from "../../../assets/images/info-icon-1.svg";
import rightArrow from "../../../assets/images/right-arrow.svg";
import leftArrow from "../../../assets/images/left-arrow.svg";

import eicon1 from "../../../assets/images/e-icon-1.svg";
import eicon2 from "../../../assets/images/e-icon-2.svg";
import eicon3 from "../../../assets/images/e-icon-3.svg";
import eicon4 from "../../../assets/images/e-icon-4.svg";
import eicon5 from "../../../assets/images/e-icon-5.svg";
import eicon6 from "../../../assets/images/e-icon-6.svg";

const productOptions = [
  { label: "Auto Insurance", value: "auto", icon: eicon1 },
  { label: "Property Insurance", value: "property", icon: eicon2 },
  { label: "Renters", value: "renters", icon: eicon3 },
  { label: "Life", value: "life", icon: eicon4 },
  { label: "Business", value: "business", icon: eicon5 },
  { label: "Recreational Vehicles", value: "recreational", icon: eicon6 },
];

const Step3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const step3Data = useSelector((state: any) => state.register.step3);

  const formik = useFormik({
    initialValues: {
      products: step3Data?.products || [],
    },
    onSubmit: (values) => {
      dispatch(updateStepData({ step: "step3", data: values }));
      dispatch(setStep(4));
      navigate("/step-4");
    },
  });

  const toggleProduct = (value: string) => {
    const current = formik.values.products;
    formik.setFieldValue(
      "products",
      current.includes(value)
        ? current.filter((v: string) => v !== value)
        : [...current, value]
    );
  };

  return (
    <section className="auth-wrapper">
      <LeftPanelRegister
        title="What Are You Shopping For?"
        subtitle=""
        img={infoIcon}
      />

      <div className="right-panel register">
        <div className="form-top">
          <SubHeader />

          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <Step stepNumber={3} />

              <div className="auth-form">
                <div className="row g-3">
                  {productOptions.map((item) => (
                    <div
                      key={item.value}
                      className="col-xl-4 col-md-6 explore-otr"
                    >
                      <label className="checkbox-container">
                        <input
                          type="checkbox"
                          checked={formik.values.products.includes(item.value)}
                          onChange={() => toggleProduct(item.value)}
                        />
                        <span className="explore-innr">
                          <span className="explore-img">
                            <img src={item.icon} alt={item.label} />
                          </span>
                          <p>{item.label}</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="btn-flex mt-40">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    dispatch(setStep(2));
                    navigate("/step-2");
                  }}
                >
                  <span>
                    <img src={leftArrow} alt="" />
                  </span>{" "}
                  Back
                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={formik.values.products.length === 0}
                >
                  Save & Continue{" "}
                  <span>
                    <img src={rightArrow} alt="" />
                  </span>
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

export default Step3;