import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  isStep1Complete,
  isStep2Complete,
  isStep3Complete,
  isStep4Complete,
} from "../utils/stepGuards";

interface Props {
  step: number;
  children: any;
}

const ProtectedStepRoute = ({ step, children }: Props) => {
  const register = useSelector((s: any) => s.register);

  // 🔒 STEP 2
  if (step >= 2 && !isStep1Complete(register.step1)) {
    return <Navigate to="/step-1" replace />;
  }

  // 🔒 STEP 3
  if (step >= 3 && !isStep2Complete(register.step2)) {
    return <Navigate to="/step-2" replace />;
  }

  // 🔒 STEP 4
  if (step >= 4 && !isStep3Complete(register.step3)) {
    return <Navigate to="/step-3" replace />;
  }

  // 🔒 STEP 5
  if (step >= 5 && !isStep4Complete(register.step4)) {
    return <Navigate to="/step-4" replace />;
  }

  return children;
};

export default ProtectedStepRoute;
