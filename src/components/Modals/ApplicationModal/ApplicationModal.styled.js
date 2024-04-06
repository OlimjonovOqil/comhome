import styled from 'styled-components'
import { FontFamaly } from '../../../GlobalStyles/GlobalStyles.styled'

export const ApplicationModalWrapper = styled.div`
	position: relative;
	padding: 44px 40px;
	text-align: center;
`

export const ModalCloseButton = styled.button`
	position: absolute;
	top: 22px;
	right: 22px;
	cursor: pointer;
	width: 20px;
	height: 20px;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
`

export const ModalTitle = styled.h3`
	font-family: ${FontFamaly.secondFamily};
	font-weight: 700;
	font-size: 20px;
	line-height: 120%;
	color: #404040;
	margin-bottom: 10px;
`

export const ModalDescription = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 130%;
	text-align: center;
	color: #5e5e5e;
	margin-bottom: 20px;
`

export const ModalForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const ModalInput = styled.input`
	border: 1px solid rgba(189, 189, 189, 0.6);
	border-radius: 40px;
	padding: 14px 22px;
	width: 250px;
	height: 46px;
	background: #fff;
	outline: none;
	position: relative;

	&:hover {
		border: 1px solid rgba(177, 146, 128, 0.6);
	}

	&:focus-visible {
		border: 1px solid rgba(177, 146, 128, 0.9);
		outline: none;
		color: #5e5e5e;
	}
`
export const ModalFooter = styled.p`
	font-weight: 400;
	font-size: 13px;
	line-height: 130%;
	text-align: center;
	color: rgba(94, 94, 94, 0.8);

	& a {
		color: #937462;
	}
`
