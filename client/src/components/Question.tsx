import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Question: React.FC = () => {
  let navigate = useNavigate();

  const [postValue, setValue] = useState<any>({
    technology: "",
    question_type: "",
    job_rank: "",
    difficulty: "",
    question_body: "",
    remarks: "",
    answer: "",
  });

  const [optionDiv, setOptionDiv] = useState<any>([
    {
      options: "",
    },
  ]);
  const handleClick = () => {
    setOptionDiv([...optionDiv, { option: "" }]);
  };

  const [optionValue, setOptionValue] = useState<any>([]);
  const handleOptionChange = (e: any, index: any) => {
    const newOptions = [...optionValue];
    newOptions[index] = e.target.value;
    setOptionValue(newOptions);
  };

  const handleData = (e: any) => {
    const { name, value } = e.target;
    setValue((val: any) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data: any = {
      technology: postValue.technology,
      question_type: postValue.question_type,
      job_rank: postValue.job_rank,
      difficulty: postValue.difficulty,
      question_body: postValue.question_body,
      remarks: postValue.remarks,
      answer: postValue.answer,
      options: optionValue,
    };


    const createTable = async () => {
      await axios.post("http://localhost:8000/api/question/post", data);
    };
    createTable();
    alert("Inserted");
    navigate("/home");
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <NavLink to="/">home</NavLink>
        <form className="mt-4" id="myform" onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Technology</label>
              <input
                type="text"
                name="technology"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Question Type</label>
              <input
                type="text"
                name="question_type"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Job Rank</label>
              <input
                type="text"
                name="job_rank"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Difficulty</label>
              <input
                type="text"
                name="difficulty"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Remarks</label>
              <input
                type="text"
                name="remarks"
                className="form-control"
                onChange={handleData}
              />
            </div>

            <div className="mb-3 col-lg-12 col-md-12 col-12">
              <label className="form-label">Question Title</label>
              <textarea
                name="question_body"
                className="form-control"
                onChange={handleData}
                cols={30}
                rows={5}
              ></textarea>
            </div>
            <div className="mb-3 col-lg-12 col-md-12 col-12">
              <label className="form-label">Answer</label>
              <textarea
                name="answer"
                className="form-control"
                onChange={handleData}
                cols={30}
                rows={5}
              ></textarea>
            </div>
            {optionDiv.map((item: any, i: any) => (
              <div key={i} className="mb-3 col-lg-6 col-md-6 col-12">
                <label className="form-label">Options</label>
                <input
                  type="text"
                  name="options"
                  className="form-control"
                  onChange={(e) => handleOptionChange(e, i)}
                />
              </div>
            ))}
            <p className="btn btn-primary" onClick={handleClick}>
              Add Options
            </p>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Question;
