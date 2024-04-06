import styled from 'styled-components'

export const UserNumberWrapper = styled.div`
	position: relative;

	& svg {
		display: ${({ $error }) => ($error ? 'block' : 'none')};
		position: absolute;
		top: 14px;
		right: 12px;
	}

	& input {
		border: ${({ $error }) =>
			$error && '1px solid rgba(226, 109, 109, 0.6)'} !important;
	}
`
