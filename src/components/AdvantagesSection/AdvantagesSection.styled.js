import styled from 'styled-components'
import { FontFamaly } from '../../GlobalStyles/GlobalStyles.styled'

export const AdvantagesSectionTitle = styled.h2`
	font-family: ${FontFamaly.secondFamily};
	font-weight: 700;
	font-size: 30px;
	line-height: 120%;
	color: #404040;
	margin: 70px 0 40px;

	@media (max-width: 1015px) {
		text-align: center;
		margin: 60px 0 30;
	}
`

export const AdvantagesList = styled.div`
	display: flex;
	gap: 24px;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 auto 80px;

	@media (max-width: 1345px) {
		margin: 0 auto 70px;
	}
`
export const AdvantagesCard = styled.div`
	padding: 22px 24px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.03);
	background: #fff;
	border-radius: 10px;
	width: 306px;

	@media (max-width: 1015px) {
		flex-direction: row;
		align-items: start;
		margin: 0 auto;
	}
`

export const AdvantagesCardText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	align-items: start;
	width: 252px;
`

export const AdvantagesCardTitle = styled.h3`
	font-family: ${FontFamaly.secondFamily};
	font-weight: 700;
	font-size: 16px;
	line-height: 120%;
	color: #404040;
`

export const AdvantagesCardDescription = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 130%;
	color: #5e5e5e;
`
