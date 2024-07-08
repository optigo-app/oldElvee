import React from 'react'
import './Styles.css'
import { storImagePath } from '../../../../../Utils/globalFunctions/GlobalFunction'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const AffiliationData = () => {
    return (
        <div>
            <p className='AffiliationComponents'>Affiliation</p>
            <Swiper
                navigation={true}
                // pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }} // Autoplay with a 3-second delay
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='AffiliationClassComponents' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo01.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo02.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo03.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo04.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo05.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo06.png`} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='AffiliationClassComponents' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo07.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo08.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo09.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo10.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo11.png`} style={{ marginRight: '90px' }} />
                        <img loading="lazy" className='affilitionImg1' src={`${storImagePath()}/images/HomePage/Affiliation/AffiliationLogo12.png`} />
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default AffiliationData