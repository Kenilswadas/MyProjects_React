import "./App.css";
import SignInpage from "./SignUp/SignInpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUppage from "./SignUp/SignUppage";
import Home from "./Userside/Home";
import Admin from "./Adminside/Admin";
import Items from "./Adminside/Items";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseConfig/Firebaseconfig";
import { useEffect, useState } from "react";
import Fashion from "./Userside/Fashion";
import Cartpage from "./Userside/Cartpage";
import { useCart } from "react-use-cart";
import CategoryPage from "./Userside/CategoryPage";
import Maintainorder from "./Adminside/Maintainorder";
import Product from "./Adminside/Product";
import Payment from "./Userside/Payment";
import Errorpage from "./Smallcomponents/Errorpage";
function App() {
  const [userName, setUserName] = useState(null);
  const { totalItems } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName(null);
      }
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/SignUppage"
            element={<SignUppage userName={userName} />}
          />
          <Route path="/" element={<SignInpage userName={userName} />} />
          <Route
            path="/Home"
            element={<Home userName={userName} totalItems={totalItems} />}
          />
          <Route
            path="/Home/Fashion"
            element={<Fashion userName={userName} totalItems={totalItems} />}
          />
          <Route
            path="/Home/Fashion/:Category"
            element={
              <CategoryPage userName={userName} totalItems={totalItems} />
            }
          />

          <Route
            path="/Home/Fashion/Men/Cartpage"
            element={
              <Cartpage
                userName={userName}
                totalItems={totalItems}
                showProduct={showProduct}
                setShowProduct={setShowProduct}
              />
            }
          />
          <Route
            path="/Home/Fashion/Men/Cartpage/Checkout/Payment"
            element={
              <Payment
                userName={userName}
                totalItems={totalItems}
                showProduct={showProduct}
                setShowProduct={setShowProduct}
              />
            }
          />

          <Route path="/Admin" element={<Admin userName={userName} />} />
          <Route
            path="/Admin/Product"
            element={
              <Product
                userName={userName}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/Admin/Maintainorder"
            element={<Maintainorder userName={userName} />}
          />
          <Route path="/Admin/Products/Items" element={<Items />} />
          <Route path="/*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
