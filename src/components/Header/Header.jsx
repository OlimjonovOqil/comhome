/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '../../GlobalStyles/GlobalStyles.styled'
import Button from '../Button/Button'
import ModalToggle from '../Modals/ModalToggle/ModalToggle'
import * as S from './Header.styled'
import './styles.css'
import { swiperContent } from './swiperContent'

const Header = () => {
	const [openModal, setOpenModal] = useState(false)

	return (
		<Container>
			<ModalToggle isOpen={openModal} setIsOpen={setOpenModal} />
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation, Autoplay]}
				className='mySwiper'
				style={{
					'--swiper-pagination-color': '#fff',
					'--swiper-pagination-bullet-inactive-color': '#fff',
					'--swiper-pagination-bullet-inactive-opacity': '0.5',
					'--swiper-pagination-bullet-size': '8px',
					'--swiper-pagination-bullet-horizontal-gap': '7px',
				}}
			>
				{swiperContent.map(slide => (
					<SwiperSlide key={slide.id}>
						<S.SliderImage src={slide.background} alt={slide.title} />
						<S.SliderContent>
							<S.SliderContentTitle>{slide.title}</S.SliderContentTitle>
							<S.SliderContentDescription>
								{slide.decr}
							</S.SliderContentDescription>
							<S.SliderContentDetails>
								{slide.details.map(detail => (
									<S.SliderContentDetailItem key={detail.id}>
										{detail.title}
									</S.SliderContentDetailItem>
								))}
							</S.SliderContentDetails>
							<Button
								borderRadius={'100px'}
								padding={'16px 36px'}
								width={'188px'}
								backgroundColor={'#b19280'}
								letterSpacing={'0.01rem'}
								color={'#fdfdfd'}
								margin={'25px 0 0 0'}
								hoverBackgroundColor={'#fff'}
								hoverColor={'#937462'}
								hoverBorder={'1px solid #b19280'}
								onClick={() => setOpenModal(true)}
							>
								Оставить заявку
							</Button>
						</S.SliderContent>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	)
}

export default Header
