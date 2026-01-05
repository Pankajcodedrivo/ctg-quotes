import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { fnameSchema, lnameSchema, dobSchema, phoneSchema } from "../../utils/yupSchemas";
import { updateProfile } from "../../service/user.api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

export const useAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const accountFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      DOB: "",
      phoneNumber: "",
      address: "",
      email: "",
    },
    validationSchema: yup.object({
      firstName: fnameSchema,
      lastName: lnameSchema,
      DOB: dobSchema,
      phoneNumber: phoneSchema,
      address: yup.string(),
      email: yup.string().email(),
    }),
    onSubmit: async (values) => {
    setLoading(true);
    try {
        const bodyData = { ...values };
        const response = await updateProfile(bodyData);
        dispatch(setUser(response?.data?.user));
        navigate("/my-account");
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
    },
  });
  return {
    accountFormik,
    loading,
  };
};
