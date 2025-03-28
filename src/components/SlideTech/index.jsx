import { Swiper, SwiperSlide } from "swiper/react";
// import styles from "./slideTech.module.css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import html from '../../assets/technologies/html.svg'
import css from '../../assets/technologies/css.svg'
import js from '../../assets/technologies/js.svg'
import ts from '../../assets/technologies/ts.svg'
import java from '../../assets/technologies/java.webp'
import react from '../../assets/technologies/react.svg'
import mysql from '../../assets/technologies/mysql.svg'
import mongodb from '../../assets/technologies/mongodb.svg'
import nodejs from '../../assets/technologies/nodejs.svg'
import jquery from '../../assets/technologies/jquery.svg'
import kotlin from '../../assets/technologies/kotlin.svg'
import jetpackCompose from '../../assets/technologies/jetpackCompose.svg'
import bootstrap from '../../assets/technologies/bootstrap.svg'
import git from '../../assets/technologies/git.svg'
import github from '../../assets/technologies/github.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";

export default function SlideTech() {
    // const { isMobileSmall } = useContexts()
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={false} 
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true} 
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
                allowTouchMove={false} 
            >
                <SwiperSlide>
                    <img src={html} alt="Html" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={css} alt="Css" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={js} alt="Js" />
                </SwiperSlide>
{/*                 <SwiperSlide>
                    <img src={jquery} alt="JQuery" />
                </SwiperSlide> */}
                <SwiperSlide>
                    <img src={bootstrap} alt="Bootstrap" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={react} alt="React" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={nodejs} alt="Nodejs" />
                </SwiperSlide>
{/*                 <SwiperSlide>
                    <img src={ts} alt="Ts" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={java} alt="Java" />
                </SwiperSlide> */}
{/*                 <SwiperSlide>
                    <img src={kotlin} alt="Kotlin" />
                </SwiperSlide> */}
{/*                 <SwiperSlide>
                    <img src={jetpackCompose} alt="JetpackCompose" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mysql} alt="MySql" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mongodb} alt="MongoDB" />
                </SwiperSlide> */}
                <SwiperSlide>
                    <img src={git} alt="Git" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={github} alt="Github" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}