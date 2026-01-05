import { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import drawIcon from "../../assets/images/draw-icon.svg";
import { signDisclaimers } from "../../utils/helpers";

interface Props {
  onChange?: (valid: boolean, signature?: string) => void;
}

const SignConsent = ({ onChange }: Props) => {
  const sigPadRef = useRef<SignatureCanvas>(null);

  const [signature, setSignature] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(
    Array(signDisclaimers.length).fill(false)
  );

  /* ---- Signature handlers ---- */
  const handleEnd = () => {
    const dataUrl = sigPadRef.current?.toDataURL();
    setSignature(dataUrl || "");
  };

  const handleClear = () => {
    sigPadRef.current?.clear();
    setSignature("");
  };

  /* ---- Disclaimer checkbox ---- */
  const handleDisclaimerChange = (index: number, value: boolean) => {
    const updated = [...checked];
    updated[index] = value;
    setChecked(updated);
  };

  /* ---- Validation ---- */
  useEffect(() => {
    const allDisclaimersChecked = checked.every(Boolean);
    const isValid = !!signature && consentChecked && allDisclaimersChecked;
    onChange?.(isValid, signature);
  }, [signature, consentChecked, checked]);

  return (
    <>
      <div className="auth-form-innr">
        <div className="review-hdr mb-40">
          <h4>Create your Signature</h4>
        </div>

        {/* Disclaimers */}
        <ul className="check-list">
          {signDisclaimers.map((text, idx) => (
            <li key={idx}>
              <label className="checkbox-container">
                {text}
                <input
                  type="checkbox"
                  checked={checked[idx]}
                  onChange={(e) =>
                    handleDisclaimerChange(idx, e.target.checked)
                  }
                />
                <span className="checkmark"></span>
              </label>
            </li>
          ))}
        </ul>

        {/* Signature Pad */}
        <div className="draw-otr mb-4">
          <h6>
            <span><img src={drawIcon} alt="" /></span> Draw Your Signature
          </h6>

          <div className="draw-box" style={{ border: "1px solid #ccc", height: 150 }}>
            <SignatureCanvas
              ref={sigPadRef}
              penColor="black"
              onEnd={handleEnd}
              canvasProps={{
                className: "sigCanvas w-100",
                height: 150,
              }}
            />
          </div>

          <div className="mt-2">
            <button
              type="button"
              onClick={handleClear}
              className="btn btn-secondary"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Consent */}
      <div className="mt-4">
        <label className="checkbox-container">
          I consent to CTG collecting and storing my information...
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => setConsentChecked(e.target.checked)}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </>
  );
};

export default SignConsent;
