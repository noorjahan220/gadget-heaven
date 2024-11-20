

const NewsLetter = () => {
    return (
        <div>
            <section style={{backgroundColor: "#4158D0",
backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
}} className='justify-center items-center flex flex-col p-10 mt-10 mb-10  rounded-[16px] '>
                <h1 className='text-xl font-bold mb-2'>Subscribe to our Newsletter</h1>
                <p className='text-xs font-medium mb-2'>Get the latest updates and news right in your inbox!</p>
                <div className="flex mb-2 gap-2">
                <input type="text" placeholder="Enteryour email" className="input input-bordered w-full max-w-xs" />
                    <button className="btn">Subscribe</button>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;