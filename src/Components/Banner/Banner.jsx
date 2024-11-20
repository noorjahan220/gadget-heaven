
import { NavLink } from 'react-router-dom';
import bannerImage from '../../assets/banner.jpg';



const Banner = () => {


    return (
        <div className=' mb-4 '>
            <div className=' text-center bg-bannerColor pb-20 pt-5 px-10  lg:p-24   text-white rounded-bl-3xl rounded-br-3xl mb-10'>
                <h2 className='text-2xl font-bold mb-3'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                <p className='text-sm font-normal mb-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <NavLink to='dashboard' className="py-2 px-4 rounded-[32px]  bg-white text-bannerColor text-xs font-bold" style={{
                    border: '1px solid black'
                }}>Shop Now </NavLink>
            </div>
            <div >
                <img style={{
                    border: '10px solid rgba(255, 255, 255, 0.5)',
                    borderRadius: '10px', width: '70%', display: 'block', margin: '0 auto', position: 'relative', top: '-90px'
                }} src={bannerImage} />
            </div>




        </div>

    );
};

export default Banner;