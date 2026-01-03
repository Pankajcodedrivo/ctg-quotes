import cross from "../assets/images/red-cross.svg"
const NotificationBox = () => {
    return (
        <div className="notification-box shadow-box">
            <div>
                <h5>New Quote</h5>
                <p>You have a new quote for Auto Insurance</p>
            </div>
            <span className="cross-icon"><img src={cross} alt="" /></span>
        </div>
    )
};

export default NotificationBox;