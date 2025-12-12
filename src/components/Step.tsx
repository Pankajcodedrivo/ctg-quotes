import tick from "../assets/images/tick.svg"
const Step = () => {
    return (
        <ul className="step-list">
            <li className="active">
                <span><img src={tick} alt="" /></span>
                <p>Step 1</p>
            </li>
            <li className="completed">
                <span><img src={tick} alt="" /></span>
                <p>Step 2</p>
            </li>
            <li>
                <span><img src={tick} alt="" /></span>
                <p>Step 3</p>
            </li>
            <li>
                <span><img src={tick} alt="" /></span>
                <p>Step 4</p>
            </li>
            <li>
                <span><img src={tick} alt="" /></span>
                <p>Step 5</p>
            </li>
        </ul>
    )
};

export default Step;