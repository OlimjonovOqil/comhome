import styled from 'styled-components'

export const OverlayStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(118, 113, 110, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
`

export const ModalStyle = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.03);
	background-color: #fff;
	width: ${({ $width }) =>
		$width === 'success' || $width === 'error' ? '244px' : '330px'};
	border-radius: 10px;
	z-index: 10;
`
