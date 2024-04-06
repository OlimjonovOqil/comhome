import React, { useState } from 'react'
import { Container } from '../../GlobalStyles/GlobalStyles.styled'
import ModalToggle from '../Modals/ModalToggle/ModalToggle'
import { Logo, NavbarVector, Phone, ServicesVector } from '../svgs'
import * as S from './Navbar.styled'
import { services } from './navbarServices'

const Navbar = () => {
	const [openApplicationModal, setOpenApplicationModal] = useState(false)

	return (
		<Container>
			<ModalToggle
				isOpen={openApplicationModal}
				setIsOpen={setOpenApplicationModal}
			/>
			<S.Navbar>
				<Logo />
				<S.NavbarList>
					<S.NavbarListItem>
						<S.NavbarLink to={'/'}>Услуги</S.NavbarLink> <NavbarVector />
						<S.ServicesWrapper>
							{services.map((service, index) => (
								<S.ServicesCategories key={service.id}>
									{service.title}
									<ServicesVector />
									<S.ServicesDetailWrapper $index={index}>
										{service.details.map(detail => (
											<S.ServicesDetailItem key={detail.id}>
												<S.NavbarLink to={'/'}>{detail.title}</S.NavbarLink>
											</S.ServicesDetailItem>
										))}
									</S.ServicesDetailWrapper>
								</S.ServicesCategories>
							))}
						</S.ServicesWrapper>
					</S.NavbarListItem>
					<S.NavbarListItem>
						<S.NavbarLink to={'/'}>О компании</S.NavbarLink>
					</S.NavbarListItem>
					<S.NavbarListItem>
						<S.NavbarLink to={'/'}>Отзывы</S.NavbarLink>
					</S.NavbarListItem>
					<S.NavbarListItem>
						<S.NavbarLink to={'/'}>Контакты</S.NavbarLink>
					</S.NavbarListItem>
				</S.NavbarList>
				<S.NavbarContacts>
					<S.NavbarNumber>
						<S.NavbarLink to={'tel:+79998887766'}>
							+ 7 (999) 888 77-66
						</S.NavbarLink>
					</S.NavbarNumber>
					<S.NavbarButton onClick={() => setOpenApplicationModal(true)}>
						<S.NavbarButtonText>Заказать звонок</S.NavbarButtonText>
						<Phone />
					</S.NavbarButton>
				</S.NavbarContacts>
			</S.Navbar>
		</Container>
	)
}

export default Navbar
