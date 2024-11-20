import { useNavigate } from "react-router-dom";
import Slider from "../slider/Slider";
import NewsLetter from "../NewsLetter/NewsLetter";


const About = () => {

    const navigate = useNavigate()
    return (
        <div className="bg-gray-100">
            <div className="text-center bg-bannerColor mb-20 p-10 lg:p-24 lg:mb-10 text-white">
                <h1 className="font-bold text-3xl mb-2">About Us</h1>
                <p className="font-normal text-sm mb-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div>

                <div className=" lg:-top-[130px] hero bg-gray-50 w-[80%] mx-auto " style={{ border: '10px solid rgba(255, 255, 255, 0.5)', borderRadius: '10px', display: 'block', position: 'relative', top: '-125px' }}>
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <img className="w-[50%] "
                            src="https://i.ibb.co.com/wLKVqRc/about.jpg" />
                        <div>
                            <h1 className="text-3xl font-bold">Shaping Tech’s Future</h1>
                            <p className="py-6 text-xs font-medium">
                                We’re dedicated to offering the latest, most innovative gadgets that simplify, enhance, and elevate your life. Our mission is to provide top-tier technology for those who embrace the future. Whether you're a tech enthusiast or seeking an upgrade, we deliver gadgets that combine convenience, performance, and style. With a focus on reliability and customer satisfaction, we help you find the perfect tech to suit your needs.
                            </p>
                            <p className="font-semibold text-[16px] mb-3">Patrick Mosey - Manager</p>
                            <button onClick={() => navigate('/')} className="  py-2 px-4 rounded-[32px] bg-white text-bannerColor text-xs font-bold border border-bannerColor">Get Started</button>
                        </div>
                    </div>
                </div>

                <div
                    className="hero min-h-screen mb-5"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/JvQK3FV/illustration-of-a-child-dressed-as-a-superhero-standing-top-of-a-hill-children-s-day-concept-vector.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="p-10  text-center">
                        <div className="">
                            <h1 className="text-white text-3xl font-bold mb-4">How We are Unique</h1>
                            <p className="text-white text-xs mb-4 font-medium ">we offer more than just gadgets — we provide innovative solutions that enhance your lifestyle. Our focus on excellence, cutting-edge technology, and customer satisfaction sets us apart. Every product is carefully selected for its performance, reliability, and design, ensuring a seamless experience that keeps you ahead of the tech curve.</p>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-items-center">
                            <div className="card w-48 bg-base-100 p-4 shadow-xl flex flex-col justify-center items-center gap-5">
                                <figure>
                                    <img className="w-16 object-cover"
                                        src="https://i.ibb.co.com/VQKWcrw/icon-line-outline-isolated-signs-for-mobile-and-web-free-vector.jpg"
                                        alt="" />
                                </figure>
                                <h2 className="text-xs font-normal">
                                    Best Service</h2>



                            </div>
                            <div className="card w-48 bg-base-100 p-4 shadow-xl flex flex-col justify-center items-center gap-5">
                                <figure>
                                    <img className="w-16 object-cover"
                                        src="https://i.ibb.co.com/1Z0Vmk4/images.png"
                                        alt="" />
                                </figure>

                                <h2 className="text-xs font-normal">
                                    Quality</h2>
                            </div>
                            <div className="card w-48 bg-base-100 p-4 shadow-xl flex flex-col justify-center items-center gap-5">
                                <figure>
                                    <img className="w-14 object-cover"
                                        src="https://i.ibb.co.com/G7D8tcN/360-F-572671949-ZRB7c-Llhn7-HKBFK1-BGr5-K6-Aaijw-CPOpk.jpg"
                                        alt="" />
                                </figure>

                                <h2 className="text-xs font-normal">
                                    Original Spares

                                </h2>



                            </div>
                            <div className="card w-48 bg-base-100 p-4 shadow-xl flex flex-col justify-center items-center gap-5">
                                <figure>
                                    <img className="w-12 object-cover"
                                        src="https://i.ibb.co.com/wQcTnLR/images-1.png"
                                        alt="" />
                                </figure>

                                <h2 className="text-xs font-normal">
                                    Best Price

                                </h2>



                            </div>
                            <div className="card w-48 bg-base-100 p-4 shadow-xl flex flex-col justify-center items-center gap-5">
                                <figure>
                                    <img className="w-14 object-cover"
                                        src="https://i.ibb.co.com/4tNFxZy/160-F-202942606-o9-SB3-Cw-UKGo-YZ7-X4-Apahnr9nc-KUzx-Udb.jpg"
                                        alt="" />
                                </figure>

                                <h2 className="text-xs font-normal">
                                    Fast & Quick

                                </h2>



                            </div>
                            <div className="card w-48 bg-base-100 p-4 shadow-xl flex flex-col justify-center items-center gap-5">
                                <figure>
                                    <img className="w-14 object-cover"
                                        src="https://i.ibb.co.com/tcqLx81/command-and-control-centre.png"
                                        alt="" />
                                </figure>

                                <h2 className="text-xs font-normal">
                                    24/7 Support

                                </h2>



                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-5">
                    <Slider />
                </div>
                <div>
                    <NewsLetter />
                </div>
            </div>

        </div>
    );
};

export default About;