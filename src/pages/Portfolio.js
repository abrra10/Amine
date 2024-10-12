import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const videoUrls = [
    "https://www.youtube.com/embed/r9jwGansp1E",
    "https://www.youtube.com/embed/xiaEaq1D3wU?si=2Lw8ObvbwPHCuThX",
    "https://www.youtube.com/embed/c0NUkpaukj0?si=s_5axXirvyAj3Gdk",
    "https://www.youtube.com/embed/7HIatasJXpE?si=zfp87WhQCyGP6Pq9",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition1}
          className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"
        >
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col lg:items-start lg:w-1/2"
          >
            <h1 className="h1">Some of my work</h1>
            <p>
              Condimentum id venenatis a condimentum vitae sapien pellentesque
              habitant morbi. Pellentesque habitant morbi tristique senectus.
              Nulla facilisi morbi tempus iaculis urna id volutpat. Viverra
              maecenas accumsan lacus vel
              <br />
              <br />
            </p>
            <Link to={"/contact"} className="btn mb-8 mx-auto lg:mx-0">
              Contact me
            </Link>
          </div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:w-1/2 w-full"
          >
            <Slider {...settings}>
              {videoUrls.map((url, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9 sm:m-x-2">
                  <iframe
                    src={url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
      <Gallery />
    </motion.section>
  );
};

export default Portfolio;
