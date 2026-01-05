import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import edit from "../../assets/images/edit.svg";
import type { RootState } from "../../store/store";
import { productQuestions } from "../../config/productQuestions";
import { getLabel } from "../../utils/helpers";

const productLabelMap: Record<
  string,
  { short: string; full: string }
> = {
  auto: { short: "auto", full: "Auto Insurance" },
  property: { short: "home", full: "Property Insurance" },
  renters: { short: "renters", full: "Renters Insurance" },
  life: { short: "life", full: "Life Insurance" },
  business: { short: "business", full: "Business Insurance" },
  recreational: { short: "recreational vehicle", full: "Recreational Vehicles" },
};


const ReviewInformation = () => {
  const navigate = useNavigate();
  const { step1, step2, step3, step4 } = useSelector(
    (state: RootState) => state.register
  );

  const handleEdit = (stepUrl: string) => {
    navigate(stepUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="auth-form-innr">

      {/* ===== PROFILE SUMMARY ===== */}
      <div className="review-hdr mb-40">
        <h4>Profile Summary</h4>
        <span className="edit-icon" onClick={() => handleEdit("/step-1")} style={{ cursor: "pointer" }}>
          <img src={edit} alt="edit" />
        </span>
      </div>
      <div className="mb-16">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h6 className="sub-hdr">First Name</h6>
            <p className="sub-para">{step1.firstName || "—"}</p>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="sub-hdr">Last Name</h6>
            <p className="sub-para">{step1.lastName || "—"}</p>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="sub-hdr">Birthday(DOB)</h6>
            <p className="sub-para">{step1.dob || "—"}</p>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="sub-hdr">Marital Status</h6>
            <p className="sub-para">{step1.maritalStatus || "—"}</p>
          </div>
          <div className="col-md-8 mb-4">
            <h6 className="sub-hdr">Gender</h6>
            <p className="sub-para">{step1.gender || "—"}</p>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="sub-hdr">Email</h6>
            <p className="sub-para">{step1.email || "—"}</p>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="sub-hdr">Phone</h6>
            <p className="sub-para">{step1.phone || "—"}</p>
          </div>
        </div>
      </div>

      {/* ===== LOCATION ===== */}
      <div className="review-hdr mb-40">
        <h4>Location</h4>
        <span className="edit-icon" onClick={() => handleEdit("/step-2")} style={{ cursor: "pointer" }}>
          <img src={edit} alt="edit" />
        </span>
      </div>
      <div className="mb-16">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h6 className="sub-hdr">Address</h6>
            <p className="sub-para">{`${step2.address}${step2.unit ? ", " + step2.unit : ""}, ${step2.city} — ${step2.state}, ${step2.zipCode}`}</p>
          </div>
        </div>
      </div>

      {/* ===== SHOPPING FOR ===== */}
      <div className="review-hdr mb-40">
        <h4>What are you shopping for?</h4>
        <span className="edit-icon" onClick={() => handleEdit("/step-3")} style={{ cursor: "pointer" }}>
          <img src={edit} alt="edit" />
        </span>
      </div>
      <div className="mb-16">
        <div className="row">
          {step3.products.map((product) => (
            <div className="col-md-12 mb-4" key={product}>
              <p className="sub-para back">{productLabelMap[product]?.full || product}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FAMILY CIRCLE / PRODUCT QUESTIONS ===== */}
      <div className="review-hdr mb-40">
        <h4>Family Circle</h4>
        <span className="edit-icon" onClick={() => handleEdit("/step-4")} style={{ cursor: "pointer" }}>
          <img src={edit} alt="edit" />
        </span>
      </div>
      <div className="mb-16">
        <div className="row">
          {step3.products.map((product) => (
            <React.Fragment key={product}>
              {/* Household members for this product */}
              <div className="col-xl-12 mb-4">
                <h6 className="sub-hdr">
                  Which household members will be included in your{" "}
                  <strong>{productLabelMap[product].short}</strong> quote?
                </h6>
                <p className="sub-para">
                  {(step4.answers?.[`${product}_members`] || []).join(", ") || "—"}
                </p>
              </div>

              {/* Product-specific questions */}
             {productQuestions
                .filter((q) => q.product === product)
                .map((q) => {
                    const answerValue = step4.answers?.[q.id];
                    const answerLabel = getLabel(q.id, answerValue); // map value to label

                    return (
                    <div className="col-xl-12 mb-4" key={q.id}>
                        <h6 className="sub-hdr">{q.label}</h6>
                        <p className="sub-para">{answerLabel}</p>
                    </div>
                    );
                })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewInformation;
