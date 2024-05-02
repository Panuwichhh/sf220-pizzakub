
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
  getDoc,
  onSnapshot
} from "firebase/firestore";
import { db } from "../utils/firebase";
import Swal from "sweetalert2";

const Bookingmange = () => {
  const [messages, setMessages] = useState([]);


  const handleDeleteData = async (id) => {
    Swal.fire({
      title: "ยืนยันลบข้อมูลผู้จอง",
      text: "ต้องการลบข้อมูลผู้จอง?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"}).then(async (result) => {
        if (result.isConfirmed) {
          await deleteDoc(doc(db, "userBooking", id));
          Swal.fire({
            title: "Deleted!",
            text: "ลบข้อมูลแล้ว",
            icon: "success"     });
            const querySnapshot = await getDocs(collection(db, "userBooking"));
            const newData = querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setMessages(newData);
          }
        });
    
}


  // ดึงข้อมูลจาก db มาแสดง realtime
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "userBooking"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(newData);
      console.log(newData);
    });
    return () => unsubscribe();
  }, []);

  const Checkstatus = async (id) => {
    const userBookingDocRef = doc(db, "userBooking", id);
    await setDoc(userBookingDocRef, { status: !status }, { merge: true });
    const querySnapshot = await getDocs(collection(db, "userBooking"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setMessages(newData);
  };


  return (
    <>
      <h3 className="container text-center mb-4 mt-4">Booking List</h3>
      <div className="container mt-3">
        <table className="table table-bordered table-striped shadow p-3 " style={{ borderRadius: "15px"
        }}>
          <thead className="table-dark">
            <tr>
            <th>Status</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Person</th>
              <th>Date , Time</th>
              <th className="text-center" >Check</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((item, index) => (
              <tr key={index}>
                                <td className="text-center">
                  {item.status === true? <i class="bi bi-check-circle-fill fs-3" style={{color: 'Green'}}></i> : <i class="bi bi-check-circle fs-3" ></i>}
                </td>
                <td>{item.firstname} {item.lastname} </td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.person}</td>
                <td>{item.date} , {item.time}</td>
                <td className="text-center">
                  <button className="btn mx-3" style={{ backgroundColor: '#FF8303' , color: 'white' }} onClick={() => Checkstatus(item.id)}>Check</button>
                  <button className="btn btn-danger mx-3" onClick={() => handleDeleteData(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bookingmange;
