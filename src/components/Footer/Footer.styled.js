import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontFamaly } from '../../GlobalStyles/GlobalStyles.styled'

export const FooterLink = styled(Link)``

export const FooterNav = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
`

export const FooterLinksList = styled.div`
	list-style-type: none;
	display: flex;
	gap: 35px;
	min-height: 0;

	@media (max-width: 1150px) {
		width: 348px;
		flex-direction: column;
		gap: 0;
	}
`

export const FooterLinksHeaders = styled.div`
	font-weight: 500;
	font-size: 14px;
	line-height: 130%;
	color: #5e5e5e;
	cursor: ${$pointer => ($pointer ? 'pointer' : 'default')};

	@media (max-width: 1150px) {
		border-bottom: ${({ $isOpen }) => !$isOpen && '1px solid #e9e9e9'};
		padding: 12px 0px;
		color: ${({ $isOpen }) => ($isOpen ? '#b19280' : '#5e5e5e')};
		background-color: ${({ $isOpen }) => $isOpen && '#fff'};
	}
`

export const FooterLinksTitle = styled.p`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: inherit;
	transition: all 0.3s ease;

	&:hover {
		color: ${({ $isLink }) => $isLink && '#b19280'};
	}

	@media (min-width: 1151px) {
		svg {
			display: none;
		}
	}
`

export const FooterServicesList = styled.div`
	padding-top: 12px;
	list-style-type: none;
	flex-direction: column;
	gap: 12px;
	display: flex;

	@media (max-width: 1150px) {
		display: ${({ $isOpen }) => ($isOpen ? 'grid' : 'none')};
		grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
		overflow: hidden;
		transition: grid-template-rows 2s ease;
		padding: 12px 0;
		background-color: transparent;
		border-bottom: ${({ $isOpen }) => $isOpen && '1px solid #e9e9e9'};
	}
`

export const FooterServicesItem = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 130%;
	color: #5e5e5e;

	&:hover {
		color: #b19280;
	}
`

export const FooterContacts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 26px;
		transition: all 0.3s ease;
	}

	& > a {
		display: inline-block;
		padding-top: 15px;
		font-family: ${FontFamaly.secondFamily};
		border-bottom: 1px solid rgba(147, 116, 98, 0.5);
		font-weight: 600;
		font-size: 13px;
		line-height: 100%;
		color: #937462;
		transition: all 0.3s ease;
		display: none;
	}

	a:hover {
		color: #b19280;
		border: none;
	}

	@media (max-width: 1150px) {
		& > a {
			display: block;
		}
	}
`

export const FooterSocialLinks = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;
	transition: all 0.3s ease;

	svg:hover g {
		opacity: 0.6;
	}
`

export const PrivacyPolicy = styled(Link)`
	display: inline-block;
	padding: 15px 0 30px;
	font-family: ${FontFamaly.secondFamily};
	border-bottom: 1px solid rgba(147, 116, 98, 0.5);
	font-weight: 600;
	font-size: 13px;
	line-height: 100%;
	color: #937462;
	transition: all 0.3s ease;

	&:hover {
		border: none;
	}

	@media (max-width: 1150px) {
		display: none;
	}
`
