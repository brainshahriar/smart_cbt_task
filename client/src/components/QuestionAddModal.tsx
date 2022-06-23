import React from 'react';

const QuestionAddModal:React.FC = () => {
    return (
        <>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Job Rank</label>
              <input
                type="text"
                name="job_rank"
                className="form-control"
                // onChange={handleData}
              />
            </div>
        </>
    );
};

export default QuestionAddModal;