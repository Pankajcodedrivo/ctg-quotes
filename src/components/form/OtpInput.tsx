import React, { useRef } from "react";

interface OtpInputProps {
  length?: number;
  disabled?:boolean;
  onChange?: (otp: string) => void;
}

const OtpInput = ({
  length = 4,
  disabled=false,
  onChange,
}: OtpInputProps) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return;

    inputsRef.current[index]!.value = value[0];

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    collectOtp();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    pastedData.split("").forEach((char, index) => {
      if (inputsRef.current[index]) {
        inputsRef.current[index]!.value = char;
      }
    });

    inputsRef.current[pastedData.length - 1]?.focus();
    collectOtp();
  };

  const collectOtp = () => {
    const otp = inputsRef.current.map((input) => input?.value ?? "").join("");
    onChange?.(otp);
  };

  return (
    <div className="otp-container security-code-wrap">
      {Array.from({ length }).map((_, index) => (
        <input
          disabled={disabled}
          key={index}
          type="password"
          maxLength={1}
          className="otp-input"
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          inputMode="numeric"
          autoComplete={`one-time-code-${index}`}
        />
      ))}
    </div>
  );
};

export default OtpInput;