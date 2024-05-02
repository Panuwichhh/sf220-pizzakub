
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
    orderBy
} from "firebase/firestore";
import { db } from "../../utils/firebase";

const Oders = () => {

    const [items, setItems] = useState([]);



    const handleDeleteData = async (id) => {
        await deleteDoc(doc(db, "orders", id));
    }



    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, 'orders'), orderBy('time')), (querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setItems(newData);
            console.log(newData);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <h3 className="container text-center mb-4 mt-4">Order List</h3>
            <div className="container mt-3">
                <div className="container mt-5">
                    <table className="table table-bordered table-striped shadow p-3 " style={{
                        borderRadius: "15px"
                    }}>
                        <thead className="table-dark">
                            <tr>
                                <th>BuyerName</th>
                                <th >menu</th>
                                <th  >Price</th>
                                <th  className="text-center">clear</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.sort((a, b) => a.time - b.time).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.buyerName}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td className="text-center">
                                        <button className="btn btn-danger mx-3" onClick={() => handleDeleteData(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div></div>
        </>
    )
}

export default Oders