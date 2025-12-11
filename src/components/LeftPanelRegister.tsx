import shape from "../assets/images/shape.png"
type CardProps = {
  title: string;
  img:string;
  subtitle:string;
};
const LeftPanelRegister = ({ title, img, subtitle }: CardProps) => {
    return (
        <div className="left-panel register">
            <div className="register-info">
                <div className="shape"><img src={shape} alt="" /></div>
                <span className="info-icon"><img src={img} alt="" /></span>
                <h1>{title} <span>{subtitle}</span></h1>
            </div>
        </div>
    )
};

export default LeftPanelRegister;