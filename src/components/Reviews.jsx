import React from "react";
import { Title } from "./index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { reviews } from "../utils/data";

const Reviews = () => {
    return (
        <section className="reviews-section" id="reviews-section">
            <div className="container">
                <p>Don't Believe Us</p>
                <Title>Believe in our Customers</Title>
                <Swiper
                    className="reviews"
                    spaceBetween={40}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        // disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Autoplay]}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="review">
                                <img src={review.imgSrc} alt="" />
                                <h1>{review.name}</h1>
                                <p>{review.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
