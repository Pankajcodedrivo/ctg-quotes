import { useField } from "formik";

interface Option {
  label: string;
  value: string;
}

interface Props {
  name: string;
  label?: string | React.ReactNode;
  options: Option[];

  formGroupClass?: string;
  labelClass?: string;
  selectClass?: string;
  disabled?: boolean;
  required?:boolean;
}

const FormSelect = ({
  name,
  label,
  options,
  formGroupClass = "",
  labelClass = "",
  selectClass = "",
  disabled = false,
  required=false,
}: Props) => {
  const [field, meta] = useField(name);

  return (
    <div className={`form-group ${formGroupClass}`}>
      <label className={`form-label ${labelClass}`}>{label}{required && <span className="text-danger ms-1">*</span>}</label>

      <select
        {...field}
        className={`form-control ${selectClass}`}
        disabled={disabled}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {meta.touched && meta.error && (
        <span className="text-danger">{meta.error}</span>
      )}
    </div>
  );
};

export default FormSelect;
