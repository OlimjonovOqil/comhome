/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

const LocationSection = () => {
	return (
		<div style={{ position: 'relative', overflow: 'hidden' }}>
			<a
				href='https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps'
				style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}
			>
				Ташкент
			</a>
			<a
				href='https://yandex.uz/maps/10335/tashkent/?ll=69.275235%2C41.323902&utm_medium=mapframe&utm_source=maps&z=13.98'
				style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}
			>
				Ташкент — Яндекс Карты
			</a>
			<iframe
				src='https://yandex.uz/map-widget/v1/?ll=69.275235%2C41.323902&z=13.98'
				width='100%'
				height='429'
				style={{ position: 'relative' }}
			></iframe>
		</div>
	)
}

export default LocationSection
