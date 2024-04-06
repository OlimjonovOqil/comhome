import React from 'react'
import { Portal } from '../../Portal/Portal'
import * as S from './ModalWrapper.styled'

const Modal = ({
	isOpen,
	setIsOpen,
	setOpenNotificationModal,
	width,
	setStatus,
	children,
}) => {
	const handleOverlayClick = e => {
		if (e.target === e.currentTarget) {
			setIsOpen(false)
			setOpenNotificationModal(false)
			setStatus(false)
		}
	}
	return (
		<>
			{isOpen && (
				<Portal>
					<S.OverlayStyle onClick={handleOverlayClick}>
						<S.ModalStyle $width={width}>{children}</S.ModalStyle>
					</S.OverlayStyle>
				</Portal>
			)}
		</>
	)
}

export default Modal
