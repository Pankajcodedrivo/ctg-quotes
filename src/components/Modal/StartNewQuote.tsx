const StartNewQuote = () => {
    return (
        <div className="modal-box text-center back-wh">
            <div className="modal-box-body">
                <div className="mb-40">
                    <h3>Start New Quote</h3>
                </div>
                <div className="mb-40">
                    <form action="">
                        <div className="form-group mb-0">
                            <label className="form-label float">Quote Type</label>
                            <select name="" id="" className="form-control">
                                <option value="1" disabled>Auto Insurance</option>
                                <option value="1">Auto Insurance</option>
                                <option value="1">Auto Insurance</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-box-footer">
                <button type="button" className="btn btn-primary w-100">Continue</button>
            </div>
        </div>
    )
};

export default StartNewQuote;