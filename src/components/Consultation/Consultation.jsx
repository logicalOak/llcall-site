import React from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';

const Consultation = () => {
	return (
		<section className='consultation'>
			<div className='container'>
				<Swiper
					slidesPerView={1}
					tag='ul'
					className='consultation-slider mySwiper'
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					modules={[Autoplay, Pagination]}>
					<SwiperSlide className='consultation-slide consultation-slide--first'>
						<h2 className='consultation__title'>Увеличьте продажи за счет Клиентского</h2>
						<p className='consultation__text'>Станьте еще ближе к клиентам</p>
						<button className='consultation__btn'>Консультация</button>
					</SwiperSlide>
					<SwiperSlide className='consultation-slide consultation-slide--second'>
						<h2 className='consultation__title'>Больше Клиентов</h2>
						<p className='consultation__text'>
							Узнайте, как получить больше клиентов с помощью LLcall
						</p>
						<button className='consultation__btn'>Консультация</button>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Consultation;
