import { useLoaderData } from "react-router-dom";
import Heading from "../Heading/Heading";


const Statistics = () => {
    const chartData = useLoaderData()
    return (
       <>
        <div>
            <Heading title={'Statistics'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
            
        </div>
        <div>

        </div>
       
       
       </>
    );
};

export default Statistics;