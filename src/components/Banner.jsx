import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div className="overflow-hidden">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="">
                        <img className="w-full object-cover h-[500px]" src="https://i.ibb.co.com/n1YpyZB/Sajek.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img className="w-full object-cover h-[500px]" src="https://i.ibb.co.com/n1YpyZB/Sajek.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img className="w-full object-cover h-[500px]" src="https://i.ibb.co.com/n1YpyZB/Sajek.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
