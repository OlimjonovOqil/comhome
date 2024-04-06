import React from 'react'
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection'
import Header from '../../components/Header/Header'
import LocationSection from '../../components/LocationSection/LocationSection'
import Layout from '../../layout/Layout'

const HomePage = () => {
	return (
		<Layout>
			<Header />
			<AdvantagesSection />
			<LocationSection />
		</Layout>
	)
}

export default HomePage
