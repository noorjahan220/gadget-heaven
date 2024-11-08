

const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center bg-bannerColor  p-20 mb-10 text-white">
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <p className="font-normal text-sm mb-2">{subtitle}</p>
            <button className="btn mr-2 hover:bg-white bg-bannerColor text-white hover:text-bannerColor">Cart</button>
                <button className="btn mr-2 hover:bg-white bg-bannerColor text-white hover:text-bannerColor">Wishlist</button>
        </div>
    );
};

export default Heading;