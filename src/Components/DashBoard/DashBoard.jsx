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


        <div className="bg-backGround">
            <div className="text-center bg-bannerColor  p-10 mb-10 text-white">
                <h1 className="font-bold text-3xl mb-2">DashBoard</h1>
                <p className="font-normal text-sm mb-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>


                <div className="flex justify-center gap-2">
                    <button  onClick={() => handleActiveState("cart")} className={`${isActive.cart ? " py-2 px-4 w-[103px] rounded-[32px] text-xs font-bold active" : "py-2 px-4 rounded-[32px] text-xs font-bold bg-bannerColor text-white border border-white w-[103px]"}`}>Cart</button>

                    <button onClick={() => handleActiveState("wishlist")} className={`${isActive.cart ? "py-2 px-4 rounded-[32px] text-xs font-bold bg-bannerColor text-white border border-white w-[103px]" : "active py-2 px-4 rounded-[32px] text-xs font-bold w-[103px]"}`}>Wishlist</button>
                </div>
            </div>

            {isActive.cart ? <Cart></Cart> :
                <Wish></Wish>}

        </div>
    );
};

export default DashBoard;