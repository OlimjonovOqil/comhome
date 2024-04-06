import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontFamaly } from '../../GlobalStyles/GlobalStyles.styled'

export const Navbar = styled.nav`
	padding: 14px 0;
	display: flex;
	align-items: center;
`

export const NavbarList = styled.ul`
	padding-left: 55px;
	list-style-type: none;
	display: flex;
	align-items: center;
	gap: 30px;
	height: 35px;

	@media (max-width: 825px) {
		padding-left: 20px;
	}
`

export const NavbarLink = styled(Link)`
	font-size: inherit;
	text-decoration: none;
	color: inherit;
`

export const NavbarListItem = styled.li`
	font-weight: 500;
	font-size: 14px;
	line-height: 130%;
	height: 100%;
	display: flex;
	align-items: center;
	color: #5e5e5e;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover,
	&:hover > svg path {
		color: #b19280;
		fill: #b19280;
	}

	&:hover > ul {
		display: block;
	}

	&:first-child {
		display: flex;
		align-items: center;
		gap: 6px;
		position: relative;
	}
`

export const ServicesWrapper = styled.ul`
	list-style-type: none;
	position: absolute;
	top: 32px;
	left: 0;
	right: 0;
	background-color: #fff;
	width: 260px;
	border-radius: 10px 0 0 10px;
	padding: 6px 20px;
	box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.03);
	display: none;
	z-index: 2;
`

export const ServicesCategories = styled.li`
	position: relative;
	font-weight: 500;
	font-size: 14px;
	line-height: 130%;
	color: #5e5e5e;
	border-bottom: 1px solid #e9e9e9;
	padding: 14px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.3s ease;

	&::after {
		content: '';
		position: absolute;
		width: 20px;
		height: 47px;
		top: 0;
		right: -20px;
		bottom: 0;
		background-color: #fff;
	}

	&:hover,
	&:hover svg path {
		color: #b19280;
		fill: #b19280;
	}

	&:hover ul {
		display: flex;
	}

	&:last-child {
		border: none;
	}
`

export const ServicesDetailWrapper = styled.ul`
	display: none;
	list-style-type: none;
	position: absolute;
	top: ${({ $index }) => $index * -47 - 6}px;
	right: -280px;
	border-left: 1px solid #e9e9e9;
	padding: 6px 20px;
	width: 260px;
	border-radius: 0 10px 10px 0;
	flex-direction: column;
	padding: 6px 20px;
	box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.03);
	background-color: #fff;
`

export const ServicesDetailItem = styled.li`
	font-weight: 500;
	font-size: 14px;
	line-height: 130%;
	color: #5e5e5e;
	border-bottom: 1px solid #e9e9e9;
	padding: 14px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.3s ease;

	&:hover {
		color: #b19280;
	}

	&:last-child {
		border: none;
	}
`

export const NavbarContacts = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	margin-left: auto;

	@media (max-width: 928px) {
		gap: 14px;
	}
`

export const NavbarNumber = styled.p`
	font-weight: 500;
	font-size: 16px;
	line-height: 130%;
	text-align: right;
	color: #5e5e5e;
	transition: all 0.3s ease;

	&:hover {
		color: #b19280;
	}
`

export const NavbarButton = styled.button`
	font-family: ${FontFamaly.secondFamily};
	border: 1px solid #b19280;
	background-color: transparent;
	border-radius: 100px;
	padding: 10px 22px;
	transition: all 0.3s ease;

	&:hover {
		background: #b19280;
	}
	&:hover p {
		color: #fdfdfd;
	}
	@media (max-width: 905px) {
		padding: 10px;
	}
`

export const NavbarButtonText = styled.p`
	font-family: ${FontFamaly.secondFamily};
	font-weight: 600;
	font-size: 13px;
	line-height: 100%;
	color: #937462;
	transition: all 0.3s ease;

	@media (max-width: 905px) {
		display: none;
	}
`
