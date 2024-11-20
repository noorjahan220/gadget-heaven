import { useEffect, useState } from "react";
import { getAllFavorites, removeWish } from "../../utils";
import CartCard from "../cartCard/cartCard";


const Wish = () => {

  const [card, setCard] = useState([])


 useEffect(()=>{
    const favorites = getAllFavorites()
    setCard(favorites)
  
 },[]);

 const handleRemovedWish = (item) =>{
  removeWish(item)
  
  const favorites = getAllFavorites()
    setCard(favorites)
}


    return (
      <div className="m-4 p-6 ">
            {
                card.map(card => (<CartCard key={card.product_id} card={card} handleClick={handleRemovedWish} />))
            }
        </div>
    );
};

export default Wish;