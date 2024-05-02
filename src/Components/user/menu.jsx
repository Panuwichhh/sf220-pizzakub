import { QuerySnapshot, addDoc, collection, onSnapshot, deleteDoc, doc, getDocs, where, query, updateDoc, } from 'firebase/firestore'
import React from 'react'
import { useEffect, useState } from 'react'
import { db } from '../../utils/firebase'


const Menu = () => {

  const [menu, setMenu] = useState([]);
  const [itemcart, setItemCart] = useState([]);
  const [buyerName, setBuyerName] = useState('');


  // ตรวจใน input รับค่าชื่อลูกค้า
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setBuyerName(e.target.value);
  };


  // เพิ่มข้อมูลในตะกร้า
  const addcart = (id) => {
    const item = menu.find(item => item.id === id);

    const timestamp = new Date();
    const name = item.name
    const price = item.price

    addDoc(collection(db, 'cart'), {

      name: name,
      price: price,
      time: timestamp

    }).then(() => {
      loadcart();
    }).catch((error) => {
      alert(error.message);
    });
  };

 // โหลดตะกร้าตอนเปิดเว็บ
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cart"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItemCart(newData);
      console.log(newData);
    });
    return () => unsubscribe();
  }, []);


  //ใส่ชื่อลูกค้า
  const addName = () => {
    // เพิ่มเวลาเพื่อเรียงออเดอร์ สินค้า
    const timestamp = new Date();

    addDoc(collection(db, 'orders'), { buyerName, time: timestamp }).then(() => {
      console.log("ส่งชื่อแล้ว");
      Swal.fire({
        icon: "success",
        title: "บันทึกชื่อลูกค้าแล้ว",
        text: "กรุณาเลือกเมนู",
        showConfirmButton: false,
        timer: 2000
      });
    }).catch((error) => {
      console.error("ส่งชื่อไม่ได้", error);
    });
  }

  //เพิ่มออเดอร์ให้แอดมิน
  const addorder = () => {
    const sourceCollectionRef = collection(db, 'cart');
    // คัดลอกคอแลกชั่น จาก ตะกร้า เข้า ออเดอร์
    const destinationCollectionRef = collection(db, 'orders'); 
    getDocs(sourceCollectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        addDoc(destinationCollectionRef, doc.data());
      });
    }).then(() => {
      console.log('คัดลอกคอลเลกชันสำเร็จ');
      Swal.fire({
        icon: "success",
        title: "สั่งเมนูแล้ว",
        text: "กรุณารอสักครู่",
        showConfirmButton: false,
        timer: 2000
      })
    }).catch((error) => {
      console.error('เกิดข้อผิดพลาดในการคัดลอก:', error);
    });
  };


  //โหลดข้อมูล
  const loadcart = () => {
    const unsubscribe = onSnapshot(collection(db, "cart"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItemCart(newData);
      console.log(newData);
    });
    return () => unsubscribe();
  }

  //ลบสินค้าในจะกร้า
  const handleDeleteData = async (id) => {
    await deleteDoc(doc(db, "cart", id));
    const querySnapshot = await getDocs(collection(db, "cart"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setItemCart(newData);
  }
    ;

 // โหลดเมนุตอนเริ่มเว็บ
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "menu"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMenu(newData);
      console.log(newData);
      loadcart();
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="position-relative overflow-hidden p-3 m-md-3 text-center background-imag">
        <div className="row ">
          <div className="col">
            <h1 className="display-3 fw-bold mb-4" style={{ color: '#FF8303' }}>MENU</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {menu.map((item, index) => (
                <div className="col-sm" key={index}>
                  <div className=" col card shadow-sms m-1 ">
                    <img alt="xxx" src={item.url} className="card-img-top" style={{ width: "100%" }}></img>
                    <div className="card-body">
                      <h2 className="card-text" > {item.name} </h2>
                      <p className="card-text">{item.description}</p>
                      <h3 className="card-text" >{item.price}</h3>
                      <button className="btn btn-lg" onClick={() => addcart(item.id)} style={{ backgroundColor: '#FF8303', color: 'white' }}>Add</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col">
            <div className="container me-auto p-2" style={{ color: '#FF8303' }}>
              <div className="card mt-5 shadow p-3" style={{ color: '#FF8303' }}>
                <div className="card-title">
                  <h3 className='display-6 fw-bold'>CART</h3>
                  <div className="container">
                    <h4>Your Name</h4>
                    <input onChange={(e) => handleChange(e)} className="form-control" type="text" name='Buyername' placeholder='name' style={{ backgroundColor: '#f8f9fa' }} />
                    <button className='btn btn-success mt-3' onClick={addName}>save name</button>
                  </div>

                </div>
                <div className="card-body">
                  <div className="container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">name</th>
                          <th scope="col">price</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemcart.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name} </td>
                            <td>{item.price}</td>
                            <td className="text-center">
                              <button className="btn btn-danger mx-1" onClick={() => handleDeleteData(item.id)}>Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button className='btn btn-info btn-lg' onClick={addorder} style={{color: 'white'}}>confrim order </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Menu