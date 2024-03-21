import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Project() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <h1>Projecto 1</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <h1>Projecto 2</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <h1>Projecto 3</h1>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Project