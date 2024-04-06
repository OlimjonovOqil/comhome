import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import PhoneMask from '../../PhoneMask/PhoneMask'
import { CloseIcon } from '../../svgs'
import * as S from './ApplicationModal.styled'

const ApplicationModal = ({
	setOpenNotificationModal,
	setStatus,
	setIsOpen,
}) => {
	const [userName, setUserName] = useState('')
	const [userNumber, setUserNumber] = useState('')
	const [validateUserNumber, setValidateUserNumber] = useState(false)

	const handelSubmit = e => {
		e.preventDefault()

		if (userNumber.replace(/\D/g, '').length !== 11) {
			setValidateUserNumber(true)
		} else {
			console.log({
				userName,
				userNumber: userNumber.replace(/\D/g, ''),
			})

			setOpenNotificationModal(true)
			setStatus('success')
		}
	}

	return (
		<S.ApplicationModalWrapper>
			<S.ModalCloseButton onClick={() => setIsOpen(false)}>
				<CloseIcon />
			</S.ModalCloseButton>
			<S.ModalTitle>Закажите звонок</S.ModalTitle>
			<S.ModalDescription>
				Мы свяжемся с вами в ближайшее время и ответим на все вопросы
			</S.ModalDescription>
			<S.ModalForm onSubmit={handelSubmit}>
				<S.ModalInput
					placeholder='Имя'
					onChange={e => setUserName(e.target.value)}
				/>
				<PhoneMask
					onChange={e => setUserNumber(e.target.value)}
					placeholder='Телефон*'
					error={validateUserNumber}
				/>
				<Button
					borderRadius={'100px'}
					padding={'16px 36px'}
					backgroundColor={'#b19280'}
					letterSpacing={'0.01rem'}
					color={'#fdfdfd'}
					hoverBackgroundColor={'#fff'}
					hoverColor={'#937462'}
					hoverBorder={'1px solid #b19280'}
				>
					Оставить заявку
				</Button>
				<S.ModalFooter>
					Отправляя заявку, вы даете согласие на
					<Link to={'/'}> обработку персональных данных</Link>
				</S.ModalFooter>
			</S.ModalForm>
		</S.ApplicationModalWrapper>
	)
}

export default ApplicationModal
