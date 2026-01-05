import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubHeader from "../../../components/SubHeader";
import SubFooter from "../../../components/SubFooter";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import Step from "../../../components/Step";
import { updateStepData, setStep } from "../../../store/registerSlice";
import { productQuestions } from "../../../config/productQuestions";
import Icon8 from "../../../assets/images/icon-8.svg";
import rightArrow from "../../../assets/images/right-arrow.svg";
import leftArrow from "../../../assets/images/left-arrow.svg";

import FamilyCircleSubStep from "../../../components/step4/Setup4Family"; // sub-step 1
import ProductQuestionBlock from "../../../components/step4/ProductQuestionBlock";
import { showErrorToast } from "../../../utils/toast/toast";

interface Option {
  label: string;
  value: string | number;
}

export interface Question {
  id: string;
  product: string;
  context: "register" | "profile";
  label: string;
  type: "select" | "checkbox";
  options?: Option[];
  required:boolean
}

interface GroupedQuestion {
  product: string;
  questions: Question[];
}
const Setup4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { subStep, members, answers } = useSelector(
    (s: any) => s.register.step4
  );
  const products = useSelector((s: any) => s.register.step3.products);

  const groupedQuestions: GroupedQuestion[] = products.map((product: string) => ({
    product,
    questions: productQuestions.filter(
      (q) => q.product === product && q.context === "register"
    ),
  }));

  const next = () => {
    // ⛔ skip questions only if no members exist at all
    if (subStep === 1 && (!members || members.length === 0)) {
      dispatch(setStep(5));
      navigate("/step-5");
      return;
    }

    if (subStep === 1) {
      dispatch(updateStepData({ step: "step4", data: { subStep: 2 } }));
      return;
    }

    // 🚫 VALIDATION BEFORE STEP 5
    if (!isStep4Valid()) {
      showErrorToast("Please complete all required questions before continuing.");
      return;
    }

    dispatch(setStep(5));
    navigate("/step-5");
  };

  const back = () => {
    if (subStep === 2) {
      dispatch(updateStepData({ step: "step4", data: { subStep: 1 } }));
    } else {
      dispatch(setStep(3));
      navigate("/step-3");
    }
  };
  const isStep4Valid = () => {
    for (const product of products) {
      // members required
      const selectedMembers = answers[`${product}_members`];
      if (!selectedMembers || selectedMembers.length === 0) return false;

      const productQs = productQuestions.filter(
        (q) => q.product === product && q.context === "register"
      );

      for (const q of productQs) {
        if (q.required && !answers[q.id]) {
          return false;
        }
      }
    }
    return true;
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
            <div className="auth-form">
              {groupedQuestions.map(({ product, questions }) => (
                  <ProductQuestionBlock
                    key={product}
                    product={product}
                    members={members}
                    questions={questions}
                    answers={answers}
                    onChange={(id, value) =>
                      dispatch(
                        updateStepData({
                          step: "step4",
                          data: { answers: { ...answers, [id]: value } },
                        })
                      )
                    }
                  />
                ))}
            </div>
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
