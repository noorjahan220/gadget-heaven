import { useEffect, useState } from "react";
import { getAllCarts, removeCart } from "../../utils";
import CartCard from "./../cartCard/cartCard";

import { AiTwotoneSliders } from "react-icons/ai";



const Cart = () => {

    const [cart, setCart] = useState([])


    useEffect(() => {
        const carts = getAllCarts()
        setCart(carts)
    }, [])


    const handleRemovedCart = (id) => {
        removeCart(id)
        const carts = getAllCarts()
        setCart(carts)
    }


    const totalPrice = cart.reduce((total, item) => {
        const cleanPrice = item.price.replace(/[^\d.-]/g, '');  // Remove non-numeric characters
        const price = parseFloat(cleanPrice);
        return total + price;
    }, 0);


    const handleShort = ()=>{
        const CartShort = [...cart].sort((a,b) => {
            const A = parseFloat(a.price.replace(/[^\d.-]/g, ''));
            const B = parseFloat(b.price.replace(/[^\d.-]/g, ''));
            return B - A;
        });
        setCart(CartShort);
    }
   
       
    return (
        <>
           <div className="ml-4 mr-4 mb-4">
           <div className="flex justify-end items-center gap-2 mb-3">
                <h2 className="font-bold text-xs">Total Cost : {totalPrice}</h2>
                <button onClick={handleShort} className=" flex  items-center justify-center gap-1 py-2 px-4 rounded-[32px] bg-white text-bannerColor text-xs font-bold border border-bannerColor">short by Price<AiTwotoneSliders/></button>
                <button className=" flex  items-center justify-center gap-1 py-2 px-4 rounded-[32px] bg-bannerColor text-white text-xs font-bold ">Purchase</button>

            </div>
            <div className="grid grid-cols-1 gap-2">
                {
                    cart.map(cart => (<CartCard key={cart.product_id} card={cart} handleClick={handleRemovedCart} />))
                }
            </div>
           </div>
        </>
    );
};




export default Cart;