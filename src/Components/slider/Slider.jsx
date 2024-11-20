import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";


const Slider = () => {
  const [sliderRef, sliderInstance] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      perView: 1,
      spacing: 10,
    },

  });

  useEffect(() => {
    if (!sliderInstance) return;

    let timeout;
    let mouseOver = false;


    const clearNextTimeout = () => clearTimeout(timeout);


    const nextTimeout = () => {
      clearNextTimeout();
      if (!mouseOver) {
        timeout = setTimeout(() => sliderInstance.next(), 2000);
      }
    };


    const handleMouseOver = () => {
      mouseOver = true;
      clearNextTimeout();
    };

    const handleMouseOut = () => {
      mouseOver = false;
      nextTimeout();
    };


    if (sliderInstance.container) {
      sliderInstance.container.addEventListener("mouseover", handleMouseOver);
      sliderInstance.container.addEventListener("mouseout", handleMouseOut);
    }


    if (sliderInstance.on) {
      sliderInstance.on("dragStarted", clearNextTimeout);
      sliderInstance.on("animationEnded", nextTimeout);
      sliderInstance.on("updated", nextTimeout);
    }


    nextTimeout();

    return () => {
      clearNextTimeout();
      if (sliderInstance.container) {
        sliderInstance.container.removeEventListener("mouseover", handleMouseOver);
        sliderInstance.container.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [sliderInstance]);

  return (
    <>
      <div>
        <h2 className="text-3xl text-center font-bold m-10 border-b-2">Our Clients Comments</h2>
        <div ref={sliderRef} className="keen-slider">
          <div className=" card  pt-10 lg:px-20 bg-white flex flex-col items-center keen-slider__slide number-slide1">

            <img className="w-16" src="https://i.ibb.co.com/xf2Cn2n/images.jpg" alt="" />
            <p className="lg:text-xl text-xs font-semibold">The website is incredibly user-friendly, and the design is sleek and modern. Navigating through the products was smooth and efficient. I was able to find the perfect gadget in no time!</p>
            <img className="w-32 rounded-full" src="https://i.ibb.co.com/hR89M2Y/images-4.jpg" alt="" />
            <p className="text-[18px] font-semibold">Olivia Davis</p>
          </div>
          <div className=" card mb-4 pt-10 lg:px-20 bg-white flex flex-col items-center keen-slider__slide number-slide1">

            <img className="w-16" src="https://i.ibb.co.com/xf2Cn2n/images.jpg" alt="" />
            <p className="lg:text-xl text-xs  font-semibold">I’m really impressed with the clear product descriptions and detailed specifications. It made comparing gadgets much easier. My shopping experience was seamless and hassle-free.</p>
            <img className="w-32 rounded-full" src="https://i.ibb.co.com/MNx5zfg/images-3.jpg" alt="" />
            <p className="text-[18px] font-semibold">James Knight</p>
          </div>
          <div className=" card mb-4 pt-10  lg:px-20 bg-white flex flex-col items-center keen-slider__slide number-slide1">

            <img className="w-16" src="https://i.ibb.co.com/xf2Cn2n/images.jpg" alt="" />
            <p className="lg:text-xl  text-xs  font-semibold">The gadget collection on this site is fantastic! The well-organized categories and filters helped me find exactly what I needed. I’ll definitely be returning for future purchases!</p>
            <img className="w-32 rounded-full" src="https://i.ibb.co.com/LvPGJqM/images-2.jpg" alt="" />
            <p className="text-[18px] font-semibold">Emily Rivera</p>
          </div>
          <div className=" card mb-4 pt-10 lg:px-20 bg-white flex flex-col items-center keen-slider__slide number-slide1">

            <img className="w-16" src="https://i.ibb.co.com/xf2Cn2n/images.jpg" alt="" />
            <p className="lg:text-xl text-xs  font-semibold">This site loads incredibly fast and performs flawlessly across all my devices. The responsive design ensures a smooth experience whether I'm on my phone or computer.</p>
            <img className="w-32 rounded-full" src="https://i.ibb.co.com/FwN35j9/160210d655785189387cf800a9741535.jpg" alt="" />
            <p className="text-[18px] font-semibold">Daniel Foster</p>
          </div>
          <div className=" card mb-4 pt-10 lg:px-20 bg-white flex flex-col items-center keen-slider__slide number-slide1">

            <img className="w-16" src="https://i.ibb.co.com/xf2Cn2n/images.jpg" alt="" />
            <p className="lg:text-xl  text-xs font-semibold">The 'View Details' button on each product card is a brilliant feature. It allows for quick access to important information, making the browsing experience much more convenient.</p>
            <img className="w-32 rounded-full" src="https://i.ibb.co.com/LvPGJqM/images-2.jpg" alt="" />
            <p className="text-[18px] font-semibold">Sarah Mitchell</p>
          </div>
          <div className=" card mb-4 pt-10 lg:px-20 bg-white flex flex-col items-center keen-slider__slide number-slide1">

            <img className="w-16" src="https://i.ibb.co.com/xf2Cn2n/images.jpg" alt="" />
            <p className="lg:text-xl text-xs  font-semibold">I had a wonderful experience shopping on this website! The layout is intuitive, and the functionality is top-notch, which made my entire purchase process enjoyable.</p>
            <img className="w-32 rounded-full" src="https://i.ibb.co.com/XjB2BXJ/images-5.jpg" alt="" />
            <p className="text-[18px] font-semibold">Alex Turner</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
