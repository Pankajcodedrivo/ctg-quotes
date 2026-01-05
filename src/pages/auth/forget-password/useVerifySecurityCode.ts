import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../../../service/register.service";

export const useVerifySecurityCode = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email") || "";

const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: yup.object({
      otp: yup
        .string()
        .required("Please enter the 4-digit security code")
        .matches(/^\d{4}$/, "Please enter the 4-digit security code"),
    }),
   onSubmit: async (values) => {
    const data = {
      email, otpdata: values.otp
    }
    await verifyOtp(data);
    navigate("/reset-password");
  },
  });
  return { formik, email };
};
