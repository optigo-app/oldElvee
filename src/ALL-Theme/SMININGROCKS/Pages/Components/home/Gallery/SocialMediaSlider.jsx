import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Styles.css'

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { storImagePath } from '../../../../Utils/globalFunctions/GlobalFunction';
import img1 from '../../../assets/Pintrest.jpg'

const sliderData = [
  {
    imageUrl: "/images/HomePage/SocialMedia/socialMedia1.jpg",
  },
  {
    imageUrl: "/images/HomePage/SocialMedia/socialMedia2.jpg",
  },
  {
    imageUrl: "/images/HomePage/SocialMedia/socialMedia3.jpg",
  },
  {
    imageUrl: "/images/HomePage/SocialMedia/socialMedia4.jpg",
  },
  {
    imageUrl: "/images/HomePage/SocialMedia/socialMedia5.jpg",
  },
];

export default function SocialMedia() {
  return (
    <div id='mainSocialMediaConatinerID' className='mainSocialMediaConatiner'>
      <div>
        <p className='socialmediaptag'>Social Media</p>
      </div>

      <div className='socialImgMainDivMain'>
        <div className='socialImgMainDiv'>
          <a href='https://www.instagram.com/p/Ce7uShwlDBi/?hl=en'>
            <img src={storImagePath() + '/images/HomePage/SocialMedia/socialMedia1.jpg'} className='social_ImgMain' />
          </a>
        </div>
        <div className='socialImgMainDiv'>
          <a href='https://in.pinterest.com/pin/706854104032666402/'>
            <img src={storImagePath() + '/images/HomePage/SocialMedia/socialMedia2.jpg'} className='social_ImgMain' />
          </a>
        </div>
        <div className='socialImgMainDiv'>
          <a href='https://www.facebook.com/photo/?fbid=5153569661402827&set=a.1321180487975116'>
            <img src={storImagePath() + '/images/HomePage/SocialMedia/socialMedia3.jpg'} className='social_ImgMain' />
          </a>
        </div>
        <div className='socialImgMainDiv'>
          <a href='https://www.linkedin.com/feed/update/urn:li:share:7118470948286009344/?actorCompanyId=3118775'>
            <img src={storImagePath() + '/images/HomePage/SocialMedia/socialMedia4.jpg'} className='social_ImgMain' />
          </a>
        </div>
      </div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },  
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination]}
        // pagination={{ clickable: true }}
        className="mySwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} style={{ marginRight: '0px' }}>
            <img loading="lazy" src={storImagePath() + slide.imageUrl} alt={`Slide ${index}`} style={{objectFit:'contain', width:'100%', padding: '27px'}} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}


{/* <a href='https://www.instagram.com/loveindiamonds/?igsh=MTVic2NuM2o2NW01Yw%3D%3D&utm_source=qr'> */ }
