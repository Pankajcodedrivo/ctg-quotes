import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubHeader from "../../../components/SubHeader";
import SubFooter from "../../../components/SubFooter";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import Step from "../../../components/Step";
import DynamicQuestions from "../../../components/step4/DynamicQuestions";
import { updateStepData, setStep } from "../../../store/registerSlice";
import { productQuestions } from "../../../config/productQuestions";
import Icon8 from "../../../assets/images/icon-8.svg";
import rightArrow from "../../../assets/images/right-arrow.svg";
import leftArrow from "../../../assets/images/left-arrow.svg";

import FamilyCircleSubStep from "../../../components/step4/Setup4Family"; // sub-step 1

const Setup4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { subStep, members, answers } = useSelector(
    (s: any) => s.register.step4
  );
  const products = useSelector((s: any) => s.register.step3.products);

  const questions = productQuestions.filter(
    (q) => products.includes(q.product) && q.context === "register"
  );

  const next = () => {
    if (subStep === 1) {
      dispatch(updateStepData({ step: "step4", data: { subStep: 2 } }));
    } else {
      dispatch(setStep(5));
      navigate("/step-5");
    }
  };

  const back = () => {
    if (subStep === 2) {
      dispatch(updateStepData({ step: "step4", data: { subStep: 1 } }));
    } else {
      dispatch(setStep(3));
      navigate("/step-3");
    }
  };

  return (
    <section className="auth-wrapper">
      <LeftPanelRegister title="Family Circle" img={Icon8} />

      <div className="right-panel register">
        <div className="form-top">
          <SubHeader />
          <Step stepNumber={4} />

          {subStep === 1 && <FamilyCircleSubStep />}

          {subStep === 2 && (
            <DynamicQuestions
              questions={questions}
              members={members}
              values={answers}
              onChange={(id:any, value:any) =>
                dispatch(
                  updateStepData({
                    step: "step4",
                    data: { answers: { ...answers, [id]: value } },
                  })
                )
              }
            />
          )}

          <div className="btn-flex mt-40">
            <button className="btn btn-secondary" onClick={back}>
              <span><img src={leftArrow} /></span> Back
            </button>

            <button className="btn btn-primary" onClick={next}>
              Save & Continue <span><img src={rightArrow} /></span>
            </button>
          </div>
        </div>

        <SubFooter />
      </div>
    </section>
  );
};

export default Setup4;
