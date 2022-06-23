import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
const QuestionSet: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  const [postValue, setValue] = useState<any>({
    name:"",
    deadline:"",
    technology: "",
    job_rank: "",
    difficulty: "",
  });

  const [questionValue,setQuestionValue]=useState<any>({
    technology: "",
    question_type: "",
    job_rank: "",
    difficulty: "",
    question_body: "",
    remarks: "",
    answer: "",
  })

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
    setQuestionValue((val: any) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const handleQuestionData = (e: any) => {
    const { name, value } = e.target;
    setQuestionValue((val: any) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };
  console.log("aa",postValue);
  console.log("bb",optionValue);
  
  return (
    <>
      <div className="container">
        <Navbar />
        <NavLink to="/">home</NavLink>
        <form className="mt-4" id="myform">
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Set Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Deadline</label>
              <input
                type="text"
                name="deadline"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Technology</label>
              <input
                type="text"
                name="job_rank"
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
            <Button className="btn btn-primary" onClick={handleShow}>
              Add Questions
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Questions</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Technology</label>
              <input
                type="text"
                name="technology"
                className="form-control"
                onChange={handleQuestionData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Question Type</label>
              <input
                type="text"
                name="question_type"
                className="form-control"
                onChange={handleQuestionData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Job Rank</label>
              <input
                type="text"
                name="job_rank"
                className="form-control"
                onChange={handleQuestionData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Difficulty</label>
              <input
                type="text"
                name="difficulty"
                className="form-control"
                onChange={handleQuestionData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Remarks</label>
              <input
                type="text"
                name="remarks"
                className="form-control"
                onChange={handleQuestionData}
              />
            </div>

            <div className="mb-3 col-lg-12 col-md-12 col-12">
              <label className="form-label">Question Title</label>
              <textarea
                name="question_body"
                className="form-control"
                onChange={handleQuestionData}
                cols={30}
                rows={5}
              ></textarea>
            </div>
            <div className="mb-3 col-lg-12 col-md-12 col-12">
              <label className="form-label">Answer</label>
              <textarea
                name="answer"
                className="form-control"
                onChange={handleQuestionData}
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
          </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <br />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
              Submit
            </button>
        </form>
      </div>
    </>
  );
};

export default QuestionSet;
