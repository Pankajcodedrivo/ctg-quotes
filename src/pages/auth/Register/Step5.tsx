import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import LeftPanelRegister from "../../../components/LeftPanelRegister";
import Step from "../../../components/Step";
import rightArrow from "../../../assets/images/right-arrow.svg";
import Icon6 from "../../../assets/images/icon-6.svg";
import ReviewInformation from "../../../components/step5/ReviewInformation";
import Disclaimers from "../../../components/step5/Disclaimers";
import SignConsent from "../../../components/step5/SignConsent";
import { useState } from "react";
import { showErrorToast } from "../../../utils/toast/toast";
import { register } from "../../../service/register.service";
import { useDispatch, useSelector } from "react-redux";
import { mapRegisterPayload } from "../../../utils/helpers";
import type { RootState } from "../../../store/store";
import ProfileCreationLoader from "./ProfileCreationLoader";
import { useNavigate } from "react-router-dom";
import { resetRegister } from "../../../store/registerSlice";

const Step5 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [allDisclaimersChecked, setAllDisclaimersChecked] = useState(false);
    const registerState = useSelector((state: RootState) => state.register);
    const [signConsentValid, setSignConsentValid] = useState(false);
    const [signatureData, setSignatureData] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [apiDone, setApiDone] = useState(false);
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        
        if (!allDisclaimersChecked) {
            showErrorToast("Please agree to all disclaimers");
            return;
        }

        if (!signConsentValid || !signatureData) {
            showErrorToast("Please complete signature and consent");
            return;
        }
        try {
            setLoading(true);
            const payload: any = {
                ...mapRegisterPayload(registerState),
                signatureData,
            };
            await register(payload);
            setApiDone(true);
            dispatch(resetRegister());
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
        // API call / next step here
    };
    if (loading) {
        return (
            <ProfileCreationLoader
                apiDone={apiDone}
                onComplete={() => {
                    // redirect ONLY after messages finish
                    navigate("/login");
                }}
            />
        );
    }
    return (
        <section className="auth-wrapper">
        <LeftPanelRegister title="Review & Consent" subtitle="" img={Icon6} />
        <div className="right-panel register">
            <div className="form-top">
            <SubHeader />
            <form onSubmit={handleSubmit}>
                <Step stepNumber={5} />
                <div className="auth-form">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#review-information">Review Information</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#disclaimers">Disclaimers</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#sign-consent">Sign Consent</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane active" id="review-information">
                        <ReviewInformation />
                    </div>
                    <div className="tab-pane fade" id="disclaimers">
                        <Disclaimers onChange={setAllDisclaimersChecked} />
                    </div>
                    <div className="tab-pane fade" id="sign-consent">
                        <SignConsent onChange={(valid, signature:any) => {
                            setSignConsentValid(valid);
                            setSignatureData(signature);
                        }} />
                    </div>
                </div>
                </div>

                <div className="text-end mt-40">
                <button type="submit" className="btn btn-primary">
                    Complete Your Profile <span><img src={rightArrow} alt="arrow"  /></span>
                </button>
                </div>
            </form>
            </div>
            <SubFooter />
        </div>
        </section>
    );
};

export default Step5;
