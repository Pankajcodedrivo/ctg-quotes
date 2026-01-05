// validation/registerStep1Schema.ts
import * as Yup from "yup";

const usPhoneRegExp = /^\(?([2-9][0-9]{2})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;

export const registerStep1Schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  dob: Yup.date()
    .required("Date of birth is required")
    .max(new Date(Date.now() - 567648000000), "You must be 18+"),
  gender: Yup.string().required("Gender is required"),
  maritalStatus: Yup.string(),

  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().matches(usPhoneRegExp, "Invalid phone number").required("Phone is required"),

  password: Yup.string()
    .min(8, "Min 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password"),
});

export const registerStep2Schema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string()
    .matches(/^\d{5}$/, "Invalid zip code")
    .required("Zip code is required"),
});

export const memberValidationSchema = Yup.object({
  newMember: Yup.object({
    name: Yup.string().required("Name is required"),
    relationship: Yup.string().required("Relationship is required"),
    inviteType: Yup.string(),
    email: Yup.lazy((_, options) => {
      console.log(options)
      const inviteType = options?.parent?.inviteType;
      const method = options?.parent?.method;
      if (inviteType === "email" && method==="invite") {
        return Yup.string()
          .required("Email is required")
          .email("Invalid email address");
      }
      return Yup.string().notRequired();
    }),
    phone: Yup.lazy((_, options) => {
      const inviteType = options?.parent?.inviteType;
      if (inviteType === "phone") {
        return Yup.string()
          .required("Phone is required")
          .matches(usPhoneRegExp, "Invalid phone number");
      }
      return Yup.string().notRequired();
    }),
  }),
});