import React from "react";
import "./Checkout.css";
import Subtota from "../Subtotal/Subtota";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct.jsx";
import { useStateValue } from "../StateProvider.jsx";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <h3>Hello </h3>
        <h2 className="checkout__title">Your shopping Basket</h2>

        {basket.map((item, i) => (
          <CheckOutProduct
            key={i}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtota />
      </div>
    </div>
  );
}

export default Checkout;
