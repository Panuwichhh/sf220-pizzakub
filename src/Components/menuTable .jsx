
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

const MenuManage = () => {
  const [Menu, setMenu] = useState([]);

  const handleEditData = async (id) => {
    const item = Menu.find(item => item.id === id); // ค้นหาข้อมูลรายการที่ต้องการแก้ไข
    const name = prompt("กรุณากรอกชื่อใหม่:");
    const description = prompt("กรุณากรอกคำอธิบายใหม่:");
    const price = prompt("กรุณากรอกราคาใหม่:");
    const url = item.url;

        setDoc(doc(db, 'menu', id), {
            name: name,
            description: description,
            price: price,
            url: url
        }).then(() => {
            alert("แก้ไขข้อมูลสำเร็จ");
        }).catch((error) => {
            alert(error.message);
        });
        
  };

  const handleDeleteData = async (id) => {
    Swal.fire({
      title: "ยืนยันการลบเมนู",
      text: "ต้องการลบแมนู?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"}).then(async (result) => {
        if (result.isConfirmed) {
          await deleteDoc(doc(db, "menu", id));
          Swal.fire({
            title: "Deleted!",
            text: "ลบเมนูแล้ว",
            icon: "success"     });
            const querySnapshot = await getDocs(collection(db, "menu"));
            const newData = querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setMenu(newData);
          }
        });
    
}

  // ดึงข้อมูลจาก db มาแสดง realtime
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "menu"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMenu(newData);
      console.log(newData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <h3 className="container text-center mb-4 mt-4">Menu List</h3>
      <div className="container mt-3">
        <table className="table table-bordered table-striped shadow p-3 " style={{ borderRadius: "15px"
        }}>
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Picture</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Menu.map((item, index) => (
              <tr key={index}>
                <td>{item.name} </td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td className="text-center"><img src={item.url} style={{ maxWidth: '10rem', height: 'auto' }} /></td>
                <td className="text-center">
                  <button className="btn btn-warning mx-1" onClick={() => handleEditData(item.id)}>Edit</button>
                   <button className="btn btn-danger mx-1" onClick={() => handleDeleteData(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MenuManage;
