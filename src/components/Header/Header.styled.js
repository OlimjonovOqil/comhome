import styled from 'styled-components'
import { FontFamaly } from '../../GlobalStyles/GlobalStyles.styled'

export const SliderImage = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: -1;
	max-width: 57.5%;
	min-width: 374px;
`

export const SliderContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	text-align: start;
`

export const SliderContentTitle = styled.h2`
	max-width: 556px;
	font-family: ${FontFamaly.secondFamily};
	font-weight: 700;
	font-size: 40px;
	line-height: 120%;
	color: #404040;
`

export const SliderContentDescription = styled.p`
	max-width: 446px;
	font-weight: 400;
	font-size: 18px;
	line-height: 140%;
	color: #5e5e5e;
`

export const SliderContentDetails = styled.ul`
	padding-left: 15px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
export const SliderContentDetailItem = styled.li`
	font-weight: 400;
	font-size: 14px;
	line-height: 130%;
	color: #5e5e5e;

	&::marker {
		color: #b19280 !important;
	}
`
