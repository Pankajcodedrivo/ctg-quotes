import image from "../../assets/images/image.png"

const CongratulationsModal = () => {
    return (
        <div className="modal-box text-center back-wh">
            <div className="modal-box-body">
                <div className="mb-32">
                    <img className="cong-image" src={image} alt="" />
                </div>
                <h3 className="color-blue">Congratulations!</h3>
                <p className="font-18">You are now in shopping mode</p>
                <h6>Quotes will begin to appear within 24-48hrs.</h6>
            </div>
        </div>
    )
};

export default CongratulationsModal;