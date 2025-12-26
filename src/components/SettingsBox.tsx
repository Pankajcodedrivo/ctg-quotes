type CardProps = {
  title: string;
  desc: string;
};
const SettingsBox = ({title,desc}:CardProps) => {
    return (
        <div className="settings-box-innr">
            <div>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
            <label className="yes-no-switch sm">
                <input type="checkbox" />
                <span className="track">
                    <span className="thumb"></span>
                </span>
            </label>
        </div>
    )
};

export default SettingsBox;