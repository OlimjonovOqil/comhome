import styled from 'styled-components'
import { FontFamaly } from '../../GlobalStyles/GlobalStyles.styled'

export const CustomButton = styled.button`
	font-family: ${FontFamaly.secondFamily};
	width: ${({ $width }) => $width || '100%'};
	border: ${({ $border }) => $border || '1px solid transparent'};
	border-radius: ${({ $br }) => $br || 0};
	padding: ${({ $padding }) => $padding || 0};
	margin: ${({ $margin }) => $margin || 0};
	background-color: ${({ $bg }) => $bg || 'transparent'};
	color: ${({ $color }) => $color || 'white'};
	font-size: ${({ $fz }) => $fz || '14px'};
	font-weight: ${({ $fw }) => $fw || 700};
	line-height: ${({ $lh }) => $lh || '100%'};
	letter-spacing: ${({ $ls }) => $ls || 'normal'};
	transition: color 0.3s ease;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${({ $hbg, $bg }) => $hbg || $bg};
		color: ${({ $hcolor, $color }) => $hcolor || $color};
		border: ${({ $hborder, $border }) => $hborder || $border || 'none'};
	}

	&:focus-visible {
		outline: none;
	}
`
