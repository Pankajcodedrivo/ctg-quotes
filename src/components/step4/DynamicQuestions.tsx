interface Props {
  questions: any[];
  values: any;
  members?: any[];
  onChange: (id: string, value: any) => void;
}

const DynamicQuestions = ({ questions, values, members = [], onChange }: Props) => {
  return (
    <>
      {questions.map((q) => (
        <div key={q.id} className="mb-70">
          <h4 className="mb-4">{q.label}</h4>

          {q.type === "checkbox" && (
            <ul className="member-checkbox">
              {members.map((m) => (
                <li key={m.name}>
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={(values[q.id] || []).includes(m.name)}
                      onChange={(e) => {
                        const prev = values[q.id] || [];
                        onChange(
                          q.id,
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
          )}

          {q.type === "select" && (
            <select
              className="form-control"
              value={values[q.id] || ""}
              onChange={(e) => onChange(q.id, e.target.value)}
            >
              <option value="">Select</option>
              {q.options.map((o: string) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </>
  );
};

export default DynamicQuestions;
