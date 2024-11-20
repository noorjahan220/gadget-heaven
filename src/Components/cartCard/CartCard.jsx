
import { RxCrossCircled } from "react-icons/rx";
const CartCard = ({ card, handleClick }) => {
    const { product_title, product_image, price, description, product_id } = card || {};


   


    return (
        <>
            <div className="p-5 grid lg:grid-cols-3 gap-5 mb-4    rounded-[16px] bg-white items-center lg:h-[55%] h-[70%] ">
                <div><img className="w-[130px] h-[90px] object-cover rounded-[12px]" src={product_image} alt={product_title} /></div>
                <div className="gap-4">
                    <h2 className="text-xl font-semibold">{product_title}</h2>
                    <p className="text-xs font-medium">{description}</p>
                    <p className="text-xs font-medium">{price}</p>
                </div>
                <div>
                    <button onClick={()=>handleClick(product_id)} className="text-red-500 ml-20"><RxCrossCircled /></button>
                </div>
            </div>

        </>
    );
};

export default CartCard;