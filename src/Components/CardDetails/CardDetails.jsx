import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";



const CardDetails = () => {
    const { product_id } = useParams()
    const allCardsData = useLoaderData()

    const [detail, setDetail] = useState({})
    useEffect(() => {
        const singleData = allCardsData.find(item => item.product_id == product_id)
        setDetail(singleData)
        console.log(singleData)
    }, [])
    return (
        <div>

            <div className="text-center bg-bannerColor p-28  mb-10 text-white">
                <h1 className="font-bold text-3xl mb-2">Product Details</h1>
                <p className="font-normal text-sm mb-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>

            <div className="hero bg-base-200 rounded-[32px] " style={{
                     width: '80%', display: 'block', margin: '0 auto', position: 'relative', top: '-170px'
                }}>
                <div className=" flex flex-col lg:flex-row p-6">
                    <img
                        src={detail.product_image}
                        className="w-[40%] object-cover rounded-lg shadow-2xl mr-8 ml-10 mt-5 mb-5" />
                    <div className="ml-8  mt-5 mb-5">
                        <h1 className="text-3xl font-semibold mb-1">{detail.product_title}</h1>
                        <p className="text-xl font-semibold mb-1">
                            Price: {detail.price}
                        </p>
                        <button className="py-1 px-2 rounded-[32px] text-xs font-normal mb-1"
                            style={{
                                border: '1px solid rgba(48, 156, 8, 1)', backgroundColor: 'rgba(48, 156, 8, 0.1)'
                            }}>In Stock</button>
                        <p className="font-light text-base mb-1">{detail.description}</p>
                        <h3 className="font-bold text-base mb-2">Specification</h3>

                        <ul className="font-light text-base mb-2">
                            {detail?.specification?.map((spec, index) => (
                                <li key={index}>{index + 1}.{spec}</li>
                            ))}
                        </ul>

                        <p className="font-bold text-[1.125rem] mb-1">Rating</p>
                       <div className="flex mb-2  items-center">
                       <div class="rating rating-sm" >
                            <input type="radio" name="rating-6" class="mask mask-star-2 " style={{ backgroundColor: 'rgba(249, 192, 4, 1)' }} />
                            <input
                                type="radio"
                                name="rating-6"
                                class="mask mask-star-2"
                                checked="checked" style={{ backgroundColor: 'rgba(249, 192, 4, 1)' }} />
                            <input type="radio" name="rating-6" class="mask mask-star-2 " style={{ backgroundColor: 'rgba(249, 192, 4, 1)' }} />
                            <input type="radio" name="rating-6" class="mask mask-star-2 " style={{ backgroundColor: 'rgba(249, 192, 4, 1)' }} />
                            <input type="radio" name="rating-6" class="mask mask-star-2" style={{ backgroundColor: 'rgba(249, 192, 4, 1)' }} />
                            
                        </div>
                        <div><p className="ml-2 mb-1 ">{detail.rating}</p></div>
                       </div>
                        
                        <div className="flex  items-center">
                            <NavLink className="py-2 px-4 rounded-[32px] text-[18px] flex items-center gap-1 font-bold" style={{
                                backgroundColor: 'rgba(149, 56, 226, 1)',color:'white'
                            }}> <div>Add To Cart 
                                </div>     <div className="indicator">



                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>

                            </div>

                            </NavLink>
                            <NavLink className="btn">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 016.364 0l.318.318.318-.318a4.5 4.5 0 116.364 6.364l-6.682 6.682a.75.75 0 01-1.06 0l-6.682-6.682a4.5 4.5 0 010-6.364z"
                                        />
                                    </svg>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;