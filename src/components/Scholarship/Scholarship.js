/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FieldTimeOutlined } from "@ant-design/icons";
import {Row, Col, Card, Form, Input, Upload , Button, Modal } from "antd";
import { RightOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
function Scholarship() {
  const [quiz,setQuiz]=useState([]);
  const navigate = useNavigate();

  const onButtonClick = (item) => {
    console.log("set time id is ..",item.id)
    navigate("/scholarship/"+item.slug,{ state:{ id: item.id}});
  };
  useEffect(()=>{
getAllQuiz()
  },[])
  const getAllQuiz=async()=>{
    let response= await axios.get('http://3.111.207.167:8000/api/quiz')
    console.log("vikas",response.data);
    if(response.data.data.length>0){
      setQuiz(response.data.data);
    }
  }
  return (
    <div className="container mt-3 mb-5">
      <h1 className="admission_heading"> Scholarship Test </h1>
      <Row gutter={[20, 30]}>
      {quiz.map((item,inde)=>(
        <Col className="hover-scale-up" xs={24} sm={24} md={12} lg={8} onClick={()=>onButtonClick(item)}>
          <Card
            hoverable
            cover={
              <img
                className="blogs__blog-card-image"
                src={item.fullimage}
                alt="card-image"
              />
            }
          >
            <div>
                {item.name}
              <span className="clamp mb-3 text-muted sh-8 quizz-eww">
               {item.descritpion}
              </span>
              <div className="g-0 align-items-center mb-1 row">
                <div className="col-auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <FieldTimeOutlined />
                  </div>
                </div>
                <div className="ps-3 col">
                  <div className="g-0 row">
                    <div className="col">
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">
                        Time
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">
                      {item.time} mint
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
              </div>
            </div>
          </Card>
        </Col>
       ))}
      </Row>
    </div>
  );
}

export default Scholarship;
