import { HomeContainer } from './styles'
import { HeroBanner } from './components/HeroBanner'
import { Catalog } from './components/Catalog'
import { useContext, useEffect } from 'react'
import { CoffeeDeliveryContext } from '../../context/CoffeeDeliveryContext'

export function Home() {
  return (
    <HomeContainer>
      <HeroBanner />
      <Catalog />
    </HomeContainer>
  )
}
