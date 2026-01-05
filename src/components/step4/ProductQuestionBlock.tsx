interface Props {
  product: string;
  members: any[];
  answers: Record<string, any>;
  questions: any[];
  onChange: (id: string, value: any) => void;
}

const productLabelMap: Record<string, string> = {
  auto: "auto",
  property: "home",
  renters: "renters",
  life: "life",
  business: "business",
  recreational: "recreational vehicle",
};

const ProductQuestionBlock = ({
  product,
  members,
  answers,
  questions,
  onChange,
}: Props) => {
  return (
    <>
      {/* ✅ MEMBERS QUESTION */}
      <div className="mb-70">
        <h4 className="mb-100">
          Which household members will be included in your{" "}
          {productLabelMap[product]} quote?<span>*</span>
        </h4>

        <ul className="member-checkbox">
          {members.map((m) => (
            <li key={`${product}-${m.name}`}>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={(answers[`${product}_members`] || []).includes(
                    m.name
                  )}
                  onChange={(e) => {
                    const prev = answers[`${product}_members`] || [];
                    onChange(
                      `${product}_members`,
                      e.target.checked
                        ? [...prev, m.name]
                        : prev.filter((x: string) => x !== m.name)
                    );
                  }}
                />

                <span className="family-care-box">
                  <span className="family-care-txt">
                    <h3>{m.name}</h3>
                    <p>{m.relationship}</p>
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ OTHER QUESTIONS */}
      {questions.map((q) => (
        <div key={q.id} className="mb-70">
          <h4 className="mb-4">{q.label}{q.required && <span>*</span>}</h4>

          <div className="row">
            <div className="col-md-7">
              <select
                className="form-control"
                value={answers[q.id] ?? ""}
                onChange={(e) => onChange(q.id, e.target.value)}
              >
                <option value="">Select</option>
                {q.options?.map((o: any) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductQuestionBlock;
