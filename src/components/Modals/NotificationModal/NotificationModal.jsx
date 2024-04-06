import { ErrorResponse, SuccessResponse } from '../../svgs'
import {
	NotificationModalText,
	NotificationModalWrapper,
} from './NotificationModal.styled'

const NotificationModal = ({ status }) => {
	return (
		<NotificationModalWrapper>
			{status === 'success' ? (
				<>
					<SuccessResponse />
					<NotificationModalText>
						Заявка успешно отправлена
					</NotificationModalText>
				</>
			) : (
				<>
					<ErrorResponse />
					<NotificationModalText>
						Заявка не отправлена, попробуйте снова
					</NotificationModalText>
				</>
			)}
		</NotificationModalWrapper>
	)
}

export default NotificationModal
