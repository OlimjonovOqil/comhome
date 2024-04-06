import React from 'react'
import { CustomButton } from './Button.styled'

const Button = ({
	width,
	border,
	borderRadius,
	padding,
	margin,
	backgroundColor,
	color,
	fontSize,
	fontWeight,
	lineHeight,
	letterSpacing,
	hoverBackgroundColor,
	hoverColor,
	hoverBorder,
	onClick,
	children,
}) => {
	return (
		<CustomButton
			$width={width}
			$border={border}
			$br={borderRadius}
			$padding={padding}
			$margin={margin}
			$bg={backgroundColor}
			$color={color}
			$fz={fontSize}
			$fw={fontWeight}
			$lh={lineHeight}
			$ls={letterSpacing}
			$hbg={hoverBackgroundColor}
			$hcolor={hoverColor}
			$hborder={hoverBorder}
			onClick={onClick}
		>
			{children}
		</CustomButton>
	)
}

export default Button
