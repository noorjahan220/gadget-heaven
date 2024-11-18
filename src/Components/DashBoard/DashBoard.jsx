import { useState } from "react";
import './DashBoard.css';
import Cart from "../Cart/Cart";
import Wish from "../Wish/Wish";
const DashBoard = () => {

    const [isActive, setIsActive] = useState({
        cart: true,
        status: "cart"
    })
    

    const handleActiveState = (status) => {
        if (status === "cart") {
            setIsActive({
                cart: true,
                status: "cart"
            });
        }
        else {
            setIsActive({
                cart: false,
                status: "wishlist"
            })
        }
    }






    return (


        <>
            <div className="text-center bg-bannerColor  p-20 mb-10 text-white">
                <h1 className="font-bold text-3xl mb-2">DashBoard</h1>
                <p className="font-normal text-sm mb-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>


                <div onClick={() => handleActiveState("cart")} className={`${isActive.cart ? " btn active" : "btn bg-bannerColor text-white"}`}>Cart</div>

                <div onClick={() => handleActiveState("wishlist")} className={`${isActive.cart ? "btn bg-bannerColor text-white" : "active btn"}`}>Wishlist</div>
            </div>

        {isActive.cart? <Cart></Cart>:
        <Wish></Wish>}

        </>
    );
};

export default DashBoard;