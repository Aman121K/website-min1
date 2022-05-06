
import { HomeOutlined } from "@ant-design/icons";
import {Row, Col, Card, Form, Input, Upload , Button, Modal } from "antd";
import React, { useEffect,useLayoutEffect,useState,useRef } from "react";
import Question from "./Question";
import { toast, ToastContainer } from "react-toastify";
import {
  useLocation
} from "react-router-dom";
import axios from "axios";
 var array1=[];
function Quiz() {
  const [totalcorrect,setTotalCorrect]=useState();
  const [totalWrong,setTotalWrong]=useState();
  const [count, setCount] = useState(0);
  const firstUpdate = useRef(true);
  // useLayoutEffect(() => {
  //   if (firstUpdate.current) {
  //     firstUpdate.current = false;
  //     return;
  //   }
  //   console.log("componentDidUpdateFunction");
  // });
  const [Quizname,setQuizName]=useState();
  const [email,setEmail]=useState();
  const [phone,setPhone]=useState();
  const [Data,setData]=useState([])
  const [qes,setQues]=useState([]);
  const [newQues,setNewQuestion]=useState([]);
  const [name,setName]=useState();
  const [image,setImage]=useState(0);
  const [time,setTime]=useState();
  const [isActive,setIsActive] = useState(true);
  const [description,setDescription]=useState();
  const [CheckItem,setCheckItme]=useState([]);
  const [submittedArray,setSUbmittedArray]=useState([]);
  const [timeup,setTimeUp]=useState(false);
  const {state} = useLocation();
  const [userForm,setUserForm]=useState(false);
  const [checkedRadio,setCheckedRadio]=useState();
  const [loader,setLoader]=useState(false);
  const [arr1,setArr1]=useState([]);
  const { id} = state; 
  // console.log("QUiz id is",{ id});
  useEffect(()=>{
    getParticularQuizData()
    // getUserForm()
   
  },[])

  // useEffect(()=>{
  //   arrObj()
  // },[qes])
  useEffect(()=>{
    window.localStorage.clear()
  },[window.onload])
  const getUserForm=()=>{
    var user_id=localStorage.getItem('user_Data');
    if(user_id){
      setUserForm(false);
    }
    else{
      setUserForm(true)
    }
  }
  const handleCancel=()=>{
    setUserForm(false)
  }
  const JoinFormSubmit=async()=>{
    if(!name && !email && !phone){
      toast.error("Some parameter is missing");
    }
    else{
    let body={
      "name": name,
      "email": email,
      "phone_number": phone,
      "quiz": 1,
      "session_id": 1}
    let response=await axios.post('http://3.111.207.167:8000/api/session',body);
    // console.log("response..",response.data.data)
    if(response.data.Success===1){
      localStorage.setItem("user_Data",response.data.data)
      toast.success("Your quiz form sucesssfully submited")
      setUserForm(false);
    }
  }
}
  const getParticularQuizData=async()=>{
    let response=await axios.get(`http://3.111.207.167:8000/api/quizquestion?quiz_id=${id}`)
    // console.log("Quiz .......",response.data);
    array1 = [];
    if(response.data.data.question.length>0){
      setName(response.data.data.quiz.name);
      setDescription(response.data.data.quiz.descritpion)
      setImage(response.data.data.quiz.image);
      setTime(response.data.data.quiz.time)
      setQues(response.data.data.question)
      // console.log("pGE REJHSGFJ", response.data.data.question);
      response.data.data.question.map((Q)=>{
        let responce = {question:Q.id,answer:""};
        array1.push(responce);
      });
        // console.log("min...",array1);
  }
}
  useEffect(() => {
    let timer = null;
    if(isActive){
      if(time<1){
        finalFormSubmit()
        setTimeUp(true)
      }
      timer = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });
  const answerArray=[];
  const abc1=(e,item)=>{
    // console.log("item,,,,,gfhgf",item)
    // console.log(e.target.checked,e.target.value);
    var updatedList = [...CheckItem];
    if (e.target.checked) {
      updatedList = [...CheckItem,{id:item+1,value:e.target.value}];
    } else {
      updatedList.splice(CheckItem.indexOf(e.target.value), 1);
    }
    setCheckItme(updatedList);
    // console.log("vikas final outout is...",CheckItem);
  }
  const arrObj = () => {
    // console.log("Page chala");
    {qes.map((Q)=>{
      let responce = {Question:Q.id,Answer:""}
      setArr1((arr1) => [...arr1,responce] );
    })}
    // console.log("final res.vvikas",arr1)
  }
  const setabc1=(a,item)=>{
    // console.log("item",item)
    // console.log("array1",array1)
    var index = array1.findIndex(p => p.Question == item.id);
    array1[index] = {question: item.id ,answer : a};
    // console.log("index",index)
    // console.log("changearray",array1)
  }
  const resultCancel=()=>{
    setTimeUp(false)
    setIsActive(false)
  }
  const finalFormSubmit=async()=>{
    setTimeUp(true)
    let body={
      "name": "minakshi",
      "email": "ddsfdf",
      "phone_number": "98867678878",
      "quiz": 2100,
      "session_id": 1,
      "answer": array1
      }
      console.log("bodyyy..",body)
      setLoader(true);
      let responce=await axios.post('http://3.111.207.167:8000/api/submitanswer',body);
      // console.log("rfinal array is..",responce.data);
      setTotalCorrect(responce.data.totalcorrect);
      setTotalWrong(responce.data.totalwrong)
      setLoader(false);
      // if()
  }
  return (
    <div className="container mt-5 mb-5">
      <ToastContainer/>
      <div className="d-lg-flex d-sm-block  justify-content-between">
        <h3 className="admission_heading"> Quiz Details </h3>
        {isActive?
        <div className="text-center" onClick={()=>setIsActive(true)} >
          time : {time}
          </div>:null
        // <div className="text-center" onClick={()=>setIsActive(true)} >
        //   <Button>Start</Button>
        //   </div>
          }
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h6 className="text-muted mb-3"> Quizz</h6>
          <Card className="quizz_list">
            <img
              className="card-img-top sh-25"
              src={image}
              alt="card-image"
            />
            <div className="p-4">
              <a
                className="body-link d-block sh-6 mb-2 h5 heading lh-1-5"
                href="#"
              >
               {name}
              </a>
              <span className="clamp mb-3 text-muted sh-8 quizz-eww">
                {description}
              </span>
              <div className="g-0 align-items-center mb-1 row">
                <div className="col-auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <HomeOutlined />
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
                       {time} mints
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          {timeup ? <Modal title="Time Up" visible={timeup}  onCancel={resultCancel  }>
      <Card className="blogs__mail-list">
        <div>Koi GIF laga dia ya logo</div>
        <div>Your Result:-</div>
        {totalWrong?
        <>
           <div>Correct Anser:- {totalcorrect}/10 </div>
           <div>Wrong Anser:- {totalWrong}/10</div>
           </>:<>Loading..Result Please wait.</>}
          </Card>
      </Modal>:null}

          {isActive?
          <div>
          <h6 className="text-muted mb-3"> Question</h6>
          {newQues && qes.map((item,index)=>(
        //  {ques.map((item,i)=>(
          <div key={index}>
          <h3>{item.title}</h3>
          <label>{item.option1}</label>
          <input type="radio" name={item.id} value="A" onChange={()=>setabc1('A',item)} />
          <label>{item.option2}</label>
          <input type="radio" name={item.id} value="B" onChange={()=>setabc1('B',item)} />
          <label>{item.option3}</label>
        <input type="radio" name={item.id} value="C" onChange={()=>setabc1('C',item)} />
        <label>{item.option4}</label>
        <input type="radio" name={item.id} value="D" onChange={()=>setabc1('D',item)} />
          </div>
        // ))}
     ))}
     </div>:<>Question Finished ...</>}
     <div onClick={()=>finalFormSubmit()}>
       submit
     </div>
          {/* <Question />
          <Question />
          <Question />
          <Question /> */}
        </div>
        <Modal title="Quiz Form" visible={userForm} onOk={JoinFormSubmit} onCancel={handleCancel}>
      <Card className="blogs__mail-list">
            <Form layout="vertical">
              <Form.Item>
                <Input placeholder="Name" type="name"  onChange={(text)=>setName(text.target.value)
                }/>
              </Form.Item>
              <Form.Item>
                <Input placeholder="E-mail" type="email" onChange={(e)=>setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Phone" type="number" onChange={(e)=>setPhone(e.target.value)} />
              </Form.Item>
            </Form>
          </Card>
      </Modal>
      </div>
    </div>
  );
}

export default Quiz;
