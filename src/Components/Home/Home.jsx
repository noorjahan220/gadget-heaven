
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";


const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Banner />
            <div className="grid grid-cols-1 lg:grid-cols-4 ">
                <div>
                    <Categories categories={categories} />
                </div>
                <div className="col-span-3">
                    <Outlet />


                </div>
            </div>
        </div>
    );
};

export default Home;