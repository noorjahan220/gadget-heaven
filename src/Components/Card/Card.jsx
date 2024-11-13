


const Card = ({ card }) => {
    const { product_title, product_image, price } = card || {};
    return (
        <div>
            <h2>{product_title}</h2>
        </div>
    );
};

export default Card;