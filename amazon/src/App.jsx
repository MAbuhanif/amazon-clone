import "./App.css";
import Checkout from "./components/CheckOut/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home_page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { useStateValue } from "./components/StateProvider";
import { useEffect } from "react";
import { auth } from "./components/fireBase";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";

const stripePromise = loadStripe(
  "pk_test_51ONYiKBuPuoPUdzs1H2ebSu7DVQMlnu3INiuYzLxHU18mfTmPwsRnBZDeO7MszVGzSPziyqrt0ru65rwT3P7FejY00XyERLqpc"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={<Elements stripe={stripePromise}>{<Payment />}</Elements>}
          />
          <Route
            path="/Orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
