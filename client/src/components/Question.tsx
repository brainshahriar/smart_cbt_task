import React, {useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios"; 
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../features/questionSlice";
import { RootState } from "../features/store";

const Question:React.FC = () => {

  const count = useSelector((state: RootState) => state.question)
  console.log(count);
  
  const dispatch = useDispatch();
    let navigate = useNavigate();
    let { id } = useParams();
    const [postValue, setValue] = useState<any>({
      name: "",
      type: "",
    });
  
    const handleData = (e: any) => {
      const { name, value } = e.target;
      setValue((val:any) => {
        return {
          ...val,
          [name]: value,
        };
      });
      dispatch(addQuestion(postValue))
    };
  
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      dispatch(addQuestion(postValue))
      const data:any = {
          name:postValue.name,
          type:postValue.type,
          user:id
      }

      console.log(data);
      
      const createTable = async () => {
          await axios.post("http://localhost:8000/api/question/post",data)
      };
  
      createTable();
      alert("Inserted");
  
      // var dirtyFormID = 'myform';
      // var resetForm:any= document.getElementById(dirtyFormID);
      // resetForm.reset();
  
      // setValue({
      //     title: "",
      //     description: "",
      //   })
      //   setImage({})
  
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
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleData}
                />
              </div>
              <div className="mb-3 col-lg-12 col-md-12 col-12">
                <label className="form-label">Type</label>
                <input
                type="text"
                  name="type"
                  className="form-control"
                  onChange={handleData}
                />
              </div>
  
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