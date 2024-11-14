
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {



  return (
    <div role="" className="tabs flex flex-col items-center p-8 border  gap-3 border-2xl">

      {

        categories.map(category => (<NavLink key={category.category}
          to={`/category/${category.category}`}
          role='tab'
          className=  {({ isActive }) => `tab text-xs font-bold bg-backGround rounded-2xl py-2 px-10 w-32  ${isActive ? 'bg-btnColor rounded-2xl' : ''}`}>
          {category.category}
         
        </NavLink>))
      }


    </div>
  );
};

export default Categories;