import AddMember from "../components/Modal/AddMember";
import CompleteYourProfile from "../components/Modal/CompleteYourProfile";
import ConfirmationModal from "../components/Modal/ConfirmationModal";
import CongratulationsModal from "../components/Modal/CongratulationsModal";
import DeclineQuote from "../components/Modal/DeclineQuote";
import DeleteAccount from "../components/Modal/DeleteAccount";
import GreatChoice from "../components/Modal/GreatChoice";
import StartNewQuote from "../components/Modal/StartNewQuote";

const Modal = () => {
    return (
        <>
            <CompleteYourProfile />
            <ConfirmationModal />
            <CongratulationsModal />
            <StartNewQuote />
            <AddMember />
            <GreatChoice />
            <DeclineQuote />
            <DeleteAccount />
        </>
    )
};

export default Modal;