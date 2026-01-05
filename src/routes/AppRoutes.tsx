import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "../pages/auth/Login/Login";
import VerifyEmail from "../pages/auth/Login/VerifyEmail"
import VerifySecurityCode from "../pages/auth/Login/VerifySecurityCode"
import MyProfile from "../pages/MyProfile";
import Home from "../pages/Home";
import ProfileCreationLoader from "../pages/auth/Register/ProfileCreationLoader";
import Step1 from "../pages/auth/Register/Step1";
import Step2 from "../pages/auth/Register/Step2";
import Step3 from "../pages/auth/Register/Step3";
import Step4 from "../pages/auth/Register/Step4";
import AccountSetup1 from "../pages/auth/Register/Step4/AccountSetup1";
import AccountSetup2 from "../pages/auth/Register/Step4/AccountSetup2";
import AccountSetup3 from "../pages/auth/Register/Step4/AccountSetup3";
import Step5 from "../pages/auth/Register/Step5";
import InvitedStep1 from "../pages/auth/Register/IfSomeoneInvitedYou/Step1";
import InvitedStep2 from "../pages/auth/Register/IfSomeoneInvitedYou/Step2";
import InvitedStep3 from "../pages/auth/Register/IfSomeoneInvitedYou/Step3";
import InvitedStep5 from "../pages/auth/Register/IfSomeoneInvitedYou/Step5";
import Step4VehicleEdit from "../pages/auth/Register/IfSomeoneInvitedYou/Step4VehicleEdit"
import Step4VehicleInformation from "../pages/auth/Register/IfSomeoneInvitedYou/Step4VehicleInformation"
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyProfileForm from "../pages/MyProfileForm";
import FamilyCircle from "../pages/FamilyCircle";
import ProtectedStepRoute from "./ProtectedStepRoute";
import MyQuotes from "../pages/MyQuotes";
import MyQuotesDetails from "../pages/MyQuotesDetails";
import MyQuotesLoader from "../pages/MyQuotesLoader";
import MyQuotesViewDetails from "../pages/MyQuotesViewDetails";
import Messages from "../pages/Messages";
import MyDocuments from "../pages/MyDocuments";
import Support from "../pages/Support";
import Notifications from "../pages/Notifications";
import MyAccount from "../pages/MyAccount";
import Security from "../pages/Security";
import Settings from "../pages/Settings";
import Modal from "../pages/Modal";

export default function AppRoutes() {
  const location = useLocation();
  const showHeaderFooter = location.pathname === "/";
  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {showHeaderFooter && <Footer />}
      <Routes>
        {/* login */}
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-security-code" element={<VerifySecurityCode />} />
        {/* register */}
        <Route path="/step-1" element={<Step1 />} />

        <Route
          path="/step-2"
          element={
            <ProtectedStepRoute step={2}>
              <Step2 />
            </ProtectedStepRoute>
          }
        />

        <Route
          path="/step-3"
          element={
            <ProtectedStepRoute step={3}>
              <Step3 />
            </ProtectedStepRoute>
          }
        />

        <Route
          path="/step-4"
          element={
            <ProtectedStepRoute step={4}>
              <Step4 />
            </ProtectedStepRoute>
          }
        />

        <Route
          path="/step-5"
          element={
            <ProtectedStepRoute step={5}>
              <Step5 />
            </ProtectedStepRoute>
          }
        />

        <Route path="/step-4/account-setup-1" element={<AccountSetup1 />} />
        <Route path="/step-4/account-setup-2" element={<AccountSetup2 />} />
        <Route path="/step-4/account-setup-3" element={<AccountSetup3 />} />
        <Route path="/profile-creation-loader" element={<ProfileCreationLoader />} />
        {/* If Someone Invited You */}
        <Route path="/invited/step-1" element={<InvitedStep1 />} />
        <Route path="/invited/step-2" element={<InvitedStep2 />} />
        <Route path="/invited/step-3" element={<InvitedStep3 />} />
        <Route path="/invited/step-vehicle-edit" element={<Step4VehicleEdit />} />
        <Route path="/invited/step-vehicle-information" element={<Step4VehicleInformation />} />
        <Route path="/invited/step-5" element={<InvitedStep5 />} />
        {/* my profile */}
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-profile-form" element={<MyProfileForm />} />
        <Route path="/family-circle" element={<FamilyCircle />} />
        <Route path="/my-quotes" element={<MyQuotes />} />
        <Route path="/my-quotes-details" element={<MyQuotesDetails />} />
        <Route path="/my-quotes-loader" element={<MyQuotesLoader />} />
        <Route path="/my-quotes-view-details" element={<MyQuotesViewDetails />} />
        <Route path="/messages" element={<Messages />} />
        {/* other screen */}
        <Route path="/my-documents" element={<MyDocuments />} />
        <Route path="/support" element={<Support />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/security" element={<Security />} />
        <Route path="/settings" element={<Settings />} />
        {/* modal */}
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </>
  );
}