import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardLeft from "../../components/DashboardLeft";
import DashboardFooter from "../../components/DashboardFooter";
import arrow from "../../assets/images/long-arrow.svg"
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { emailSchema, fullNameSchema } from "../../utils/yupSchemas";
import { saveSupport } from "../../service/support.api";
import FormInput from "../../components/form/FormInput";

const Support = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
     const [submitting, setSubmitting] = useState(false);

    const supportFormik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullname: fullNameSchema,
      email: emailSchema
    }),
    onSubmit: async (values, { resetForm }) => {
      setSubmitting(true);
      try {
        await saveSupport(values);
        resetForm();
      } catch (error) {
        console.error("Support request failed", error);
      } finally {
        setSubmitting(false);
      }
    },
    });
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>Support</h3>
                        <p className="font-16">Get help, find answers, and connect with our team.</p>
                    </div>
                    <FormikProvider value={supportFormik}>
                    <form onSubmit={supportFormik.handleSubmit}>
                    <div className="cmn-box h-auto p-40">
                        <h4 className="s-hdr">Contact us</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <FormInput
                                    name="fullname"
                                    label="Full Name"
                                    labelClass="float"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <FormInput
                                    name="email"
                                    type="email"
                                    label="Email Address"
                                    placeholder="Email Address"
                                    labelClass="float"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <FormInput
                                    name="phone"
                                    label="Phone (optional) "
                                    labelClass="float"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="col-md-12">
                                <FormInput
                                    name="message"
                                    label="Message (Tell us what you need help with.) "
                                    labelClass="float"
                                    placeholder="Enter your message"
                                />
                            </div>
                            <div className="col-md-12 text-center">
                                <button type="submit" 
                                className="btn green-btn mb-w-100">
                                {submitting ? "Submitting..." : "Submit"} <span><img src={arrow} alt="" /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </form>
                    </FormikProvider>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};
export default Support;
