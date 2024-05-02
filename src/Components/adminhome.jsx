
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
  onSnapshot,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import Swal from "sweetalert2";
import firebase from "firebase/compat/app";

const AdminHome = () => {



    return (
        <>
<div className="p-5 text-center bg-body-tertiary" style={{height: '80vh'}}>
    <div className="container py-5">
        <h1 className="text-body-emphasis" style={{fontSize : '8rem'}}>PizzaKub  Admin</h1>
    </div>
</div>
        </>
    )
}

export default AdminHome