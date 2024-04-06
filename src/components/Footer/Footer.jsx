import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../GlobalStyles/GlobalStyles.styled'
import {
	FooterServicesOpenVector,
	Logo,
	NavbarVector,
	TelegramIcon,
	VKontakteIcon,
	WhatsAppIcon,
} from '../svgs'
import * as S from './Footer.styled'
import { footerLinks } from './footerLinks'

const Footer = () => {
	const [selectedService, setSelectedService] = useState({
		id: null,
		isOpen: false,
	})

	return (
		<Container>
			<S.FooterNav>
				<S.FooterLinksList>
					{footerLinks.map(header => (
						<div key={header.id}>
							<S.FooterLinksHeaders
								onClick={() => {
									setSelectedService(prev => ({
										id: header.id,
										isOpen:
											header.id === selectedService.id ? !prev.isOpen : true,
									}))
								}}
								$isOpen={
									selectedService.id === header.id &&
									header.id < 4 &&
									selectedService.isOpen
								}
							>
								<S.FooterLinksTitle $isLink={header.id > 3}>
									{header.id > 3 ? (
										<Link to={'/'}>{header.title}</Link>
									) : (
										header.title
									)}
									{header.id < 4 && (
										<>
											{selectedService.id === header.id &&
											selectedService.isOpen ? (
												<FooterServicesOpenVector />
											) : (
												<NavbarVector />
											)}
										</>
									)}
								</S.FooterLinksTitle>
							</S.FooterLinksHeaders>
							<S.FooterServicesList
								$isOpen={
									selectedService.id === header.id &&
									header.id < 4 &&
									selectedService.isOpen
								}
							>
								{header?.details?.map(link => (
									<S.FooterServicesItem key={link.id}>
										<Link to={'/'}>{link.title}</Link>
									</S.FooterServicesItem>
								))}
							</S.FooterServicesList>
						</div>
					))}
				</S.FooterLinksList>
				<S.FooterContacts>
					<div>
						<Logo />
						<Link to={'tel:+79998887766'}>+ 7 (999) 888 77-66</Link>
						<S.FooterSocialLinks>
							<Link to={'/'}>
								<WhatsAppIcon />
							</Link>
							<Link to={'/'}>
								<TelegramIcon />
							</Link>
							<Link to={'/'}>
								<VKontakteIcon />
							</Link>
						</S.FooterSocialLinks>
					</div>
					<Link to={'/'}>Политика конфиденциальности</Link>
				</S.FooterContacts>
			</S.FooterNav>
			<S.PrivacyPolicy to={'/'}>Политика конфиденциальности</S.PrivacyPolicy>
		</Container>
	)
}

export default Footer
