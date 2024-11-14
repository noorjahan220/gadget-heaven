
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";


const Home = () => {
    const categories = useLoaderData();

    return (
        <div className="bg-backGround">
            <Banner />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2  ">
                <div>
                    <Categories categories={categories} />
                </div>
                <div className="col-span-4">
                    <Outlet />


                </div>
            </div>
        </div>
    );
};

export default Home;