
import React from "react";
import { useState, useEffect } from "react";
import {
  doc,
  collection,
  addDoc,
  query,
  getDocs,
  QuerySnapshot,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../utils/firebase";
import Swal from "sweetalert2";

const Formbooking = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddData = async () => {
    await addDoc(collection(db, "userBooking"), form)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "ส่งรายการจองสำเร็จ",
          showConfirmButton: false,
          timer: 2000
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    
  <>
    <div className=" p-3 m-md-3 text-center">
          <h1 className="display-3 fw-bold" style={{ color: "#FF8303" }}>
            Booking Now
          </h1>
      <div className="card container d-flex mt-5 shadow p-3" style={{width: '50rem'}} >
        <form>
          <div className="row mt-3">
            <h3 className="mt-3 mb-3">Booking Table</h3>
            <div className="col">
              <label className="form-label" >First-name</label>
              <input onChange={(e) => handleChange(e)} className="form-control" placeholder='First-Name' name='firstname' style={{backgroundColor: '#f8f9fa'}}  />
            </div>
            <div className="col">
              <label className="form-label">last-name</label>
              <input onChange={(e) => handleChange(e)} className="form-control" placeholder='Last-Name' name='lastname' style={{backgroundColor: '#f8f9fa'}}  />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label className="form-label mt-3" >Phone-number</label>
              <input onChange={(e) => handleChange(e)} className="form-control" placeholder='Phone-number' type="tel" name='phone' style={{backgroundColor: '#f8f9fa'}}  />
            </div>
            <div className="col">
              <label className="form-label mt-3">E-mail</label>
              <input onChange={(e) => handleChange(e)} className="form-control" placeholder='E-mail' name='email' style={{backgroundColor: '#f8f9fa'}}  />
            </div>
          </div>
          <div className=" row mt-3">
            <div className="col">
            <label className="form-label">Date</label>
            <input type="date" onChange={(e) => handleChange(e)} className="form-control" name='date' style={{backgroundColor: '#f8f9fa'}}  />
          </div>
          <div className="col">
            <label className="form-label">time</label>
            <input type="time" onChange={(e) => handleChange(e)} className="form-control" name='time' style={{backgroundColor: '#f8f9fa'}}   />
          </div>
          <div className="col">
            <label className="form-label">Person</label>
            <input onChange={(e) => handleChange(e)} className="form-control" name='person' style={{backgroundColor: '#f8f9fa'}} />
          </div>
          </div>
        </form>
        <div className="container">
        <button onClick={handleAddData} className="btn mt-3" style={{ backgroundColor: "#FF8303" , color: 'white',width: '18rem', height: '2.5rem' }}>Submit</button>
        </div>
      </div>
    </div>

    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://img.freepik.com/free-photo/3d-daily-planner-calendar-pencil-alarm-clock_107791-15857.jpg?t=st=1714457291~exp=1714460891~hmac=c7db2079e5daa87c9c2a2d98e576cb5f1322b5083e36c1ca765c47e89dd17926&w=996" className="d-block mx-lg-auto img-fluid"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Booking Condition</h1>
        <ul className="lead">
        <li className="mt-1">แจ้งชื่อของท่าน ระบุเบอร์ อีเมล จำนวนคน และ วันเวลา</li>
        <li className="mt-1">เลทได้ไม่เกิน 15 นาที</li>
        <li>กรณีกรอกข้อมูลซ้ำทางร้านจะนับข้อมูลล่าสุด</li>
        <li className="mt-1">กรณีกรอกข้อมูลซ้ำทางร้านจะนับข้อมูลล่าสุด</li>
        <li className="mt-1">ถ้ากรอกข้อมูลไม่ครบทางร้านจะถือว่าไม่ได้จอง</li>
        <h3 className="mt-3">ติดต่อ เบอร์ : 09X-XXX-XXXX</h3>
        </ul>
      </div>
    </div>
  </div>
  </>
  );
};

export default Formbooking;
