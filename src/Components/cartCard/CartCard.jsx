
import { RxCrossCircled } from "react-icons/rx";
const CartCard = ({ card, handleClick }) => {
    const { product_title, product_image, price, description, product_id } = card || {};


   


    return (
        <>
            <div className="flex p-5 gap-5 h-[130px] m-1 rounded-[16px] bg-white items-center justify-around">
                <div><img className="w-[130px] h-[90px] object-cover rounded-[12px]" src={product_image} alt={product_title} /></div>
                <div className="gap-4">
                    <h2>{product_title}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
                <div>
                    <button onClick={()=>handleClick(product_id)} className="text-red-500"><RxCrossCircled /></button>
                </div>
            </div>

        </>
    );
};

export default CartCard;