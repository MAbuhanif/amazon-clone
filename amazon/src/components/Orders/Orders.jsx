import React, { useEffect, useState } from "react";
// import Order from "./Order";
import "./Orders.css";
import { db } from "../fireBase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              
              id: doc.id,
              data: doc.data(),
              
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  console.log(orders);
  return (
    <div className="orders">
      <h1> Your orders </h1>
      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order key={i} order={order} />
        ) )}
      </div>
    </div>
  );
};

export default Orders;
