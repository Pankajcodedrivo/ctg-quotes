import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { emailSchema, passwordSchema } from "../../../utils/yupSchemas";
import { logInApi } from "../../../service/register.service";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: emailSchema,
      password: passwordSchema,
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const bodyData = {
          email: values.email,
          password: values.password,
        };
        const response = await logInApi(bodyData);
        console.log(response);
        setLoading(false);
        dispatch(setUser(response?.data?.user));
        localStorage.setItem("access_token", response?.data?.tokens.access);
        localStorage.setItem("refresh_token", response?.data?.tokens.refresh);
        const role = response?.data?.user?.role;
        console.log(role);
        if (role === "user") {
          navigate("/my-quotes");
        } else {
          navigate("/login");
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
  });
  return {
    loginFormik,
    loading,
  };
};
