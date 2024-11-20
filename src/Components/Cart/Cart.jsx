import { useEffect, useState } from "react";
import { getAllCarts, removeCart } from "../../utils";
import CartCard from "./../cartCard/cartCard";

import { AiTwotoneSliders } from "react-icons/ai";
import { useNavigate } from "react-router-dom";




const Cart = () => {

    const [cart, setCart] = useState([])
    const navigate = useNavigate();

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
        const cleanPrice = item.price.replace(/[^\d.-]/g, '');  
        const price = parseFloat(cleanPrice);
        return total + price;
    }, 0);


    const handleShort = () => {
        const CartShort = [...cart].sort((a, b) => {
            const A = parseFloat(a.price.replace(/[^\d.-]/g, ''));
            const B = parseFloat(b.price.replace(/[^\d.-]/g, ''));
            return B - A;
        });
        setCart(CartShort);
    }


    const handleCloseModal = () => {
        localStorage.removeItem('carts');
        setCart([]);
        navigate('/');
    };

    return (
        <>
            <div className="ml-4 mr-4 mb-4">
                <div className="lg:flex justify-end items-center gap-2 mb-3">
                    <h2 className="font-bold text-xs mb-1">Total Cost : {totalPrice}</h2>
                    <button onClick={handleShort} className=" flex  mb-1 items-center justify-center gap-1 py-2 px-4 rounded-[32px] bg-white text-bannerColor text-xs font-bold border border-bannerColor">short by Price<AiTwotoneSliders /></button>
                    <button className=" flex  items-center justify-center gap-1 py-2 px-4 rounded-[32px] bg-bannerColor text-white text-xs font-bold " onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
                    <dialog id="my_modal_1" className="modal">

                        <div className="bg-white  lg:w-[30%] p-5 flex flex-col justify-center items-center gap-1.5 rounded-[16px]">
                            <img className="w-[60px]" src="/src/assets/Group.png" alt="" />
                            <h2 className="font-bold text-[18px] border-b-2">Payment Successfully</h2>

                            <p className="text-xs font-medium">Thanks for Purchasing</p>
                            <p className="text-xs font-medium">Total:{totalPrice}</p>

                            <form method="dialog">

                                <button onClick={handleCloseModal} style={{ backgroundColor: 'rgba(17, 0, 0, 0.03)' }} className="py-1 px-14 rounded-[32px]  text-xs font-semibold">Close</button>
                            </form>
                        </div>


                    </dialog>




                </div>
                <div className="m-4 p-6">
                    {
                        cart.map(cart => (<CartCard key={cart.product_id} card={cart} handleClick={handleRemovedCart} />))
                    }
                </div>
            </div>

        </>

    );
};




export default Cart;