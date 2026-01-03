import { useField } from "formik";
import { useState } from "react";

interface FormInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string | React.ReactNode;
  formGroupClass?: string;
  labelClass?: string;
  inputClass?: string;
  disabled?: boolean;
  activeIcon?: string;
  icon?: string;
  buttonText?: string;
  buttonClass?: string;
  wrapperClass?: string;
  required?: boolean;
  disableButton?: boolean;
  onActionClick?: () => void;
}

const FormInput = ({
  name,
  type = "text",
  placeholder = "",
  label = "",
  formGroupClass = "",
  labelClass = "form-label",
  inputClass = "form-control",
  disabled = false,
  icon,
  activeIcon,
  buttonText,
  buttonClass = "btn btn-primary",
  wrapperClass = "",
  required = false,
  disableButton = false,
  onActionClick,
}: FormInputProps) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const finalWrapperClass = wrapperClass || (isPassword ? "password" : buttonText ? "verify-innr" : "");
  const iconToShow = isPassword && activeIcon && showPassword ? activeIcon : icon;

  const handleActionClick = () => {
    if (isPassword) setShowPassword((prev) => !prev);
    onActionClick?.();
  };

  return (
    <div className={`form-group ${formGroupClass}`}>
      {label && (
        <label className={`form-label ${labelClass}`}>
          {label}{required && <span className="text-danger ms-1">*</span>}
        </label>
      )}

      <div className={finalWrapperClass}>
        <input
          {...field}
          type={inputType}
          placeholder={placeholder}
          className={`form-control ${inputClass}`}
          disabled={disabled}
        />

        {iconToShow && (
          <span className="password-icon" style={{ cursor: "pointer" }} onClick={handleActionClick}>
            <img src={iconToShow} alt="icon" />
          </span>
        )}

        {buttonText && (
          <button type="button" className={buttonClass} disabled={disableButton} onClick={handleActionClick}>
            {buttonText}
          </button>
        )}
      </div>

      {meta.touched && meta.error && <div className="error-text">{meta.error}</div>}
    </div>
  );
};

export default FormInput;
