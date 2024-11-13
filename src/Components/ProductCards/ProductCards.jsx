import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const ProductCards = () => {
    const data = useLoaderData()

console.log(data)
    const { category } = useParams()
console.log(category)

    const [cardInfo, setCardInfo] = useState([])

    useEffect(() => {
       if(category){
        const filteredByCategory = [...data].filter(data => data.category === category)

       
        setCardInfo(filteredByCategory)
       }
       else{
        setCardInfo(data)
       }
    }, [category, data])




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                cardInfo.map(card => (<Card key={card.id} card={card} />))
            }
        </div>
    );
};

export default ProductCards;