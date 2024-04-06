import React, { useState } from 'react'
import ApplicationModal from '../ApplicationModal/ApplicationModal'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import NotificationModal from '../NotificationModal/NotificationModal'

const ModalToggle = ({ isOpen, setIsOpen }) => {
	const [openNotificationModal, setOpenNotificationModal] = useState(false)
	const [status, setStatus] = useState('')

	return (
		<ModalWrapper
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			setOpenNotificationModal={setOpenNotificationModal}
			width={status}
			setStatus={setStatus}
		>
			{openNotificationModal ? (
				<NotificationModal status={status} />
			) : (
				<ApplicationModal
					setIsOpen={setIsOpen}
					setStatus={setStatus}
					setOpenNotificationModal={setOpenNotificationModal}
				/>
			)}
		</ModalWrapper>
	)
}

export default ModalToggle
