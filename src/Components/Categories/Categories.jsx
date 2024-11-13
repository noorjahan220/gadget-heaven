
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {

  return (
    <div role="" className="tabs flex flex-col items-start ">
      {
        categories.map(category => (<Link key={category.category} to={`category/${category.category}`} role='tab' className='tab'>
          {category.category}
        </Link>))
      }

    </div>
  );
};

export default Categories;