type CardProps = {
  title: string;
  desc: string;
  value: boolean;
  onToggle: (newValue: boolean) => void;
};

const SettingsBox = ({ title, desc, value, onToggle }: CardProps) => {
    return (
        <div className="settings-box-innr">
            <div>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
            <label className="yes-no-switch sm">
                 <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => onToggle(e.target.checked)}
                    />
                <span className="track">
                    <span className="thumb"></span>
                </span>
            </label>
        </div>
    )
};

export default SettingsBox;