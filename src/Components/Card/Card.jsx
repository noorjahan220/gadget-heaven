
import { Link, NavLink } from 'react-router-dom';


const Card = ({ card }) => {
  const { product_title, product_image, price, product_id } = card || {};
  return (
    <>
      <div className="card  w-full" style={{
        border: '1px solid black'
      }}>
        <figure className="px-5 pt-5 ">
          <img
            src={product_image}
            alt={product_title}
            className="rounded-xl h-[150px]" />
        </figure>
        <div className="p-4  flex flex-col justify-end gap-3 flex-grow">
          <h2 className="card-title text-xl font-semibold">{product_title}</h2>
          <p className="text-xs font-normal">{price}</p>
          <div className="card-actions text-xs font-semibold">

            <NavLink 
            to={`/card/${product_id}`} 
            className="py-2 px-4 rounded-[32px]" 
            style={{
              border: '1px solid rgba(149, 56, 226, 1)'
            }}>View Details</NavLink>
          </div>
        </div>
      </div>

    </>
  );
};

export default Card;