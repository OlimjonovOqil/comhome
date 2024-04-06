import { useMask } from '@react-input/mask'
import { ModalInput } from '../Modals/ApplicationModal/ApplicationModal.styled'
import { EmptyNumber } from '../svgs'
import { UserNumberWrapper } from './PhoneMask.stylde'

const PhoneMask = ({ onChange, placeholder, error }) => {
	const inputRef = useMask({
		mask: '+7 (99_) ___-__-__',
		replacement: { _: /\d/ },
	})
	return (
		<UserNumberWrapper $error={error}>
			<ModalInput
				ref={inputRef}
				onChange={onChange}
				placeholder={placeholder}
				type='numeric'
			/>
			<EmptyNumber />
		</UserNumberWrapper>
	)
}

export default PhoneMask
