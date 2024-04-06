import React from 'react'
import { Container } from '../../GlobalStyles/GlobalStyles.styled'
import * as S from './AdvantagesSection.styled'
import { advantages } from './advantages'

const AdvantagesSection = () => {
	return (
		<Container>
			<S.AdvantagesSectionTitle>
				Преимущества работы с нами
			</S.AdvantagesSectionTitle>
			<S.AdvantagesList>
				{advantages.map(advantage => (
					<S.AdvantagesCard key={advantage.id}>
						{advantage.image}
						<S.AdvantagesCardText>
							<S.AdvantagesCardTitle>{advantage.title}</S.AdvantagesCardTitle>
							<S.AdvantagesCardDescription>
								{advantage.decr}
							</S.AdvantagesCardDescription>
						</S.AdvantagesCardText>
					</S.AdvantagesCard>
				))}
			</S.AdvantagesList>
		</Container>
	)
}

export default AdvantagesSection
