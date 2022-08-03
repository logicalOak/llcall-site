import React from 'react';
import data from './data';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';

const Concept = () => {
	return (
		<section className='concept' id='concept'>
			<div className='container'>
				<h2 className='concept__title'>{data.title}</h2>
				<Swiper
					breakpoints={{
						// when window width is >= 768px
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
					}}
					slidesPerView={1}
					tag='ul'
					className='concept-list mySwiper'
					spaceBetween={30}
					// centeredSlides={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					modules={[Autoplay, Pagination]}>
					{data.list.map((i, idx) => (
						<SwiperSlide tag='li' key={idx} className='concept-item'>
							<div className='concept__image'>
								<img src={i.img} alt={i.title} />
							</div>
							<h3 className='concept-item__title'>{i.title}</h3>
							<p className='concept-item__desc'>{i.text}</p>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Concept;
