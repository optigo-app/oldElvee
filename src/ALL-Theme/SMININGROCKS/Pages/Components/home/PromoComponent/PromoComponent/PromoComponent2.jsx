import React from 'react'
import demo1img from '../../../../assets/demoImg1.jpg'
import './Styles.css'
import { storImagePath } from '../../../../../Utils/globalFunctions/GlobalFunction'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

var BrandsContent = [
    {
        "image": "/images/HomePage/Brands/BrandImg01.jpg",
        "title": "Beyond Basic ",
        "description": "The brand that champions ethical luxury and eco-conscious elegance. It all begins with cutting-edge technology that replicates the natural diamond-growing process, creating exquisite gems with the same chemical composition, physical properties, and captivating sparkle as their mined counterparts."
    },
    {
        "image":  "/images/HomePage/Brands/BrandImg06.jpg",
        "title": "Storyst",
        "description": "In the enchanting world of love and matrimony, where dreams are spun from whispers and promises, there exists a realm where beauty knows no bounds. This is the story of 'Ethereal Elegance,' a prestigious bridal jewelry brand that weaves tales of romance and timeless sophistication."
    },
    {
        "image":  "/images/HomePage/Brands/BrandImg04.jpg",
        "title": "Nuera",
        "description": "This is the story of Minimal & Shiny Gold Jewelry, a brand born from the desire to celebrate the beauty of simplicity and the allure of gold. Each piece tells a unique story, a tale of grace and sophistication, designed for those who find joy in the subtle, the refined, and the timeless."
    },
    {
        "image":  "/images/HomePage/Brands/BrandImg05.jpg",
        "title": "Promise",
        "description": "This is the world of Modern Diamond Jewelry, a brand that embodies the perfect fusion of cutting-edge design and the everlasting brilliance of diamonds. minimalist diamond-studded jewelleries that symbolize everlasting love, to avant-garde statement pieces that capture the essence of bold individuality, the collection is a celebration of the diversity and versatility of modern aesthetics"
    },
    {
        "image":  "/images/HomePage/Brands/BrandImg02.jpg",
        "title": "Diament",
        "description": "In the world of hip-hop, where trends come and go like the beat of a drum, 'Bling Dynasty' remains an immutable force, a testament to the enduring power of self-expression. As long as there are dreams to chase and stories to tell, the legacy of 'Bling Dynasty' will shine on, a symbol of resilience, creativity, and the unbreakable bond between music and culture."
    },
    {
        "image":"/images/HomePage/Brands/BrandImg03.jpg",
        "title": "Lovent",
        "description": "In the dazzling world of high fashion, where style is the ultimate form of self-expression and luxury is a way of life, there exists a realm of unparalleled opulence and exquisite glamour. This is the domain of High Fashion Diamond Jewelry, a brand that epitomizes the union of haute couture and the eternal allure of diamonds."
    }
];


const PromoComponent1 = () => {
    return (
        <div className='mt-5'>
            <Swiper
                pagination={{ clickable: true }}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
            >
                {BrandsContent.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='promo-daimondBoxMain'>
                            <div className='promo-daimondBox1'>
                            <p style={{ fontSize: '22px', color: 'rgba(29, 50, 88, 0.8)', fontWeight:'600' }}>{item?.title}</p>
                                <p style={{ fontSize: '22px', color: 'rgba(29, 50, 88, 0.8)' }}>{item.description}</p>
                            </div>
                            <div className='promo-daimondBox2'>
                                <img loading="lazy" src={storImagePath() + item.image} className='promo-daimondBox2-image' alt={`Item ${index + 1}`} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PromoComponent1