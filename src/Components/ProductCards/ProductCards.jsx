import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const ProductCards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [cardInfo, setCardInfo] = useState([])

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(data => data.category === category)

            setCardInfo(filteredByCategory)
        }
        else {
            setCardInfo(data)
        }
    }, [category, data])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                cardInfo.map(card => (<Card key={card.id} card={card} />))
            }
        </div>
    );
};

export default ProductCards;