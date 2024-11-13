
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner.jpg';
import './Banner.css'


const Banner = () => {


    return (
        <div className=' mb-8 '>
        <div className=' text-center bg-bannerColor p-20 text-white rounded-bl-3xl rounded-br-3xl'>
            <h2 className='text-3xl font-bold mb-3'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
            <p className='text-sm font-normal mb-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <Link to = 'dashboard' className='mb-4 btn'>Shop Now </Link>
        </div>
        <div className='imgWrap'>
            <img className='rounded-3xl'  src={bannerImage}/>
        </div>
        
        
        
        
        </div>
    
    );
};

export default Banner;