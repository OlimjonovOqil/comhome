import styled from 'styled-components'
import { FontFamaly } from '../../../GlobalStyles/GlobalStyles.styled'

export const NotificationModalWrapper = styled.div`
	padding: 18px 33px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`
export const NotificationModalText = styled.p`
	font-family: ${FontFamaly.secondFamily};
	font-weight: 700;
	font-size: 16px;
	line-height: 120%;
	text-align: center;
	color: #404040;
`
