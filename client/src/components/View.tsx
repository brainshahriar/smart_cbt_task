import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const View: React.FC = () => {
  const [userData, setuserData] = useState<any>({});
  let { id } = useParams();

  const view = async (userId: any) => {
    await axios
      .get(`http://localhost:8000/api/user/getall/${userId}`)
      .then((result) => {
        setuserData(result.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    view(id);
  }, [id]);
  return (
    <>
      <Navbar />
      <NavLink to="/">home</NavLink>
      <div>
        {userData && (
          <div>
            <div>
              <h3>Ttile : {userData?.title}</h3>
              <p>Description : {userData?.description}</p>
              <img
                className="previewImg"
                src={`http://localhost:8000/public/${userData?.image}`}
                alt=""
              />
            </div>
            {userData?.questions &&
              userData.questions.map((question: any,i:any) => (
                <div key={i}>
                  <h3>{question.name}</h3>
                  <h5>{question.type}</h5>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default View;
