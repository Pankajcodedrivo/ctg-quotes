import { useState } from "react";
import { disclaimers } from "../../utils/helpers";
interface Props {
  onChange: (allChecked: boolean) => void;
}
const Disclaimers = ({ onChange }: Props) => {
  const [checked, setChecked] = useState<boolean[]>(
    Array(disclaimers.length).fill(false)
  );

  const handleChange = (index: number, value: boolean) => {
    const updated = [...checked];
    updated[index] = value;
    setChecked(updated);

    // ✅ return true ONLY if all are checked
    const allChecked = updated.every(Boolean);
    onChange(allChecked);
  };

  return (
    <div className="auth-form-innr">
      <div className="review-hdr mb-4">
        <h4>Disclaimer Text</h4>
      </div>
        <ul className="check-list">
        {disclaimers.map((text, idx) => (
            <li key={idx}>
            <label className="checkbox-container">
                {text}
                <input
                type="checkbox"
                checked={checked[idx]}
                onChange={(e) => handleChange(idx, e.target.checked)}
                />
                <span className="checkmark"></span>
            </label>
            </li>
        ))}
        </ul>
    </div>
  );
};

export default Disclaimers;
