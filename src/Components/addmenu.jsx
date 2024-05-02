
import React from "react";
import { initializeApp } from 'firebase/app';
import { useState, useEffect } from "react";
import {
    doc,
    collection,
    addDoc,
} from "firebase/firestore";
import { imgeDB, db } from "../utils/firebase";
import Swal from "sweetalert2";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AddMenu = () => {

    const [form, setForm] = useState({});

    const [image, setImage] = useState(null);


    // จับข้อความใน input
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    //ตรวจจับรูปที่ใส่
    const handleProductImg = (e) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    };



    //อัพโหลดรูป
    const handleUpload = () => {
        const storageRef = ref(imgeDB, `/menu_images/${image.name}`);
        uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!', storageRef);
            //ดึง url ของรูป
            getDownloadURL(snapshot.ref).then((url) => {
                console.log('File available at', url);
                const data = { url, ...form }
                addDoc(collection(db,"menu"), data)            
                .then((res) => {
                    console.log(res);
                // ใช่้ sweetalert2
                }).then(
                    Swal.fire({
                        icon: "success",
                        title: "เพิ่มรายการสำเร็จ",
                        showConfirmButton: false,
                        timer: 2000
                      })
                )
            }).catch((error) => {
                console.error('Error download URL:', error);
            });
        }).catch((error) => {
            console.error('Error uploading file:', error);
        });
    };


    return (
        <>
            <div className=" p-3 m-md-3 text-center">
                <div className="card container mt-5 d-flex">
                    <div className="card-title">
                        <h1 className="display-3 fw-bold" style={{ color: "#FF8303" }}>
                            ADD MENU
                        </h1>
                    </div>
                    <form>
                        <label className="form-label">Menu img</label>
                        <input onChange={(e) => handleProductImg(e)} className="form-control" type="file" />
                        <div className="row mt-3">
                            <div className="col">
                                <label className="form-label" >Menu Name</label>
                                <input onChange={(e) => handleChange(e)} className="form-control" placeholder='Menu-Name' name='name' />
                            </div>
                            <div className="col">
                                <label className="form-label" >Price</label>
                                <input onChange={(e) => handleChange(e)} className="form-control" placeholder='Menu-Price' name='price' />
                            </div>
                        </div>
                        <div className="row mt-3 mx-1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              3">
                            <label className="form-label">Description</label>
                            <input onChange={(e) => handleChange(e)} className="form-control" type="text" placeholder='Description' name='description' />
                        </div>
                    </form>
                    <button className="btn mt-3 mb-3" onClick={handleUpload} style={{ backgroundColor: "#FF8303", color: 'white' }}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default AddMenu;