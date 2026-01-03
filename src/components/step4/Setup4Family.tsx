import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikProvider } from "formik";
import FormInput from "../../components/form/FormInput";
import FormSelect from "../../components/form/FormSelect";

import { updateStepData } from "../../store/registerSlice";
import { relationshipOptions } from "../../constants/dropdownOptions";

import user from "../../assets/images/user.png";
import plus from "../../assets/images/plus.svg";
import tickIcon from "../../assets/images/tick-icon.svg";
import { memberValidationSchema } from "../../validation/validationSchema";

const Setup4Family = () => {
  const dispatch = useDispatch();
  const members = useSelector((s: any) => s.register.step4.members);

  const [showMemberForm, setShowMemberForm] = useState(false);
  const [activeTab, setActiveTab] = useState<"invite" | "manual">("invite");
  const [lastAddedMember, setLastAddedMember] = useState<string | null>(null);

  useEffect(() => {
    if (!lastAddedMember) return;
    const t = setTimeout(() => setLastAddedMember(null), 2000);
    return () => clearTimeout(t);
  }, [lastAddedMember]);

  
  const formik = useFormik({
    initialValues: {
      members: members || [],
      newMember: {
        name: "",
        relationship: "",
        method: "invite",
        inviteType: "email",
        email: "",
        phone: "",
      },
    },
    validationSchema:memberValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const updatedMembers = [...values.members, values.newMember];
      dispatch(
        updateStepData({
          step: "step4",
          data: { members: updatedMembers },
        })
      );
      setLastAddedMember(values.newMember.name);
      resetForm({
        values: {
          members: updatedMembers,
          newMember: {
            name: "",
            relationship: "",
            method: "invite",
            inviteType: "email",
            email: "",
            phone: "",
          },
        },
      });
      setShowMemberForm(false);
      setActiveTab("invite");
    },
  });

  return (
    <FormikProvider value={formik}>
      <div className="auth-form">
        <div className="mb-4">
          <h4>Create Your Family Circle</h4>
          <div className="mt-2 para">
            <p>
              Add the people who will be included in your policies. You can
              invite them to create their own profile and connect it yours, or
              you can manually enter their information.
            </p>
          </div>
        </div>

        {/* MAIN INSURED */}
        <div className="family-care-otr">
          <div
            className={`family-care-box ${
              formik.values.members && formik.values.members.length > 0
                ? "setup-2"
                : ""
            }`}
          >
            <div className="family-care-img">
              <img src={user} alt="" />
            </div>
            <div className="family-care-txt">
              <h3>You</h3>
              <p>Main Insured</p>
            </div>
          </div>

          {/* ADDED MEMBERS */}
          {formik.values.members.map((m: any, i: number) => (
            <div className="family-care-box setup-2" key={i}>
              <div className="family-care-img">
                <img src={user} alt="" />
              </div>
              <div className="family-care-txt">
                <h3>{m.name}</h3>
                <p>
                  {
                    relationshipOptions.find(
                      (r) => r.value === m.relationship
                    )?.label
                  }
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ADD MEMBER BUTTON */}
        {!showMemberForm && (
          <div
            className="add-membar"
            onClick={() => setShowMemberForm(true)}
            style={{ cursor: "pointer" }}
          >
            <span>
              <img src={plus} alt="" />
            </span>
          </div>
        )}

        {/* ADD MEMBER FORM */}
        {showMemberForm && (
          <form
            className="family-care-box mobile-start align-items-start"
            onSubmit={formik.handleSubmit}
          >
            <div className="family-care-img">
              <img src={user} alt="" />
            </div>

            <div className="family-care-txt w-100">
              <div className="row">
                <div className="col-lg-6">
                  <FormInput
                    name="newMember.name"
                    label="Name"
                    labelClass="float"
                  />
                </div>

                <div className="col-lg-6">
                  <FormSelect
                    name="newMember.relationship"
                    label="Relationship"
                    labelClass="float"
                    options={relationshipOptions}
                  />
                </div>
              </div>

              {/* INVITE / MANUAL */}
              <div className="invite-tab mt-3">
                <button
                  type="button"
                  className={activeTab === "invite" ? "active" : ""}
                  onClick={() => {
                    setActiveTab("invite");
                    formik.setFieldValue("newMember.method", "invite");
                    formik.setFieldValue("newMember.inviteType", "email");
                  }}
                >
                  Invite
                </button>

                <button
                  type="button"
                  className={activeTab === "manual" ? "active" : ""}
                  onClick={() => {
                    setActiveTab("manual");
                    formik.setFieldValue("newMember.method", "manual");
                  }}
                >
                  Manual
                </button>
              </div>

              {/* INVITE OPTIONS */}
              {activeTab === "invite" && (
                <div className="invite-method-content mt-3">
                  <label>Select Invite Method:</label>
                  <div>
                    <label>
                      <input
                        type="radio"
                        checked={formik.values.newMember.inviteType === "email"}
                        onChange={() =>
                          formik.setFieldValue("newMember.inviteType", "email")
                        }
                      />
                      Email
                    </label>
                    <label className="ml-3">
                      <input
                        type="radio"
                        checked={formik.values.newMember.inviteType === "phone"}
                        onChange={() =>
                          formik.setFieldValue("newMember.inviteType", "phone")
                        }
                      />
                      Phone
                    </label>
                  </div>

                  {formik.values.newMember.inviteType === "email" && (
                    <FormInput name="newMember.email" label="Email Address" />
                  )}

                  {formik.values.newMember.inviteType === "phone" && (
                    <FormInput name="newMember.phone" label="Phone Number" />
                  )}
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100 mt-3">
                {activeTab === "invite" ? "Send Invite" : "Add Member"}
              </button>
            </div>
          </form>
        )}

        {lastAddedMember && (
          <h6 className="invited-bottom">
            <span>
              <img src={tickIcon} alt="" />
            </span>
            <strong>{lastAddedMember}</strong> added successfully
          </h6>
        )}

        {formik.values.members.length > 0 && !showMemberForm && (
          <div
            className="add-membar no-back mb-100"
            onClick={() => setShowMemberForm(true)}
            style={{ cursor: "pointer" }}
          >
            <span>
              <img src={plus} alt="" />
            </span>
            <p>Add Member</p>
          </div>
        )}
      </div>
    </FormikProvider>
  );
};

export default Setup4Family;
