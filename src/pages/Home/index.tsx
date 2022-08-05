import { HomeContainer } from './styles'
import { HeroBanner } from './components/HeroBanner'
import { Catalog } from './components/Catalog'

export function Home() {
  return (
    <HomeContainer>
      <HeroBanner />
      <Catalog />
    </HomeContainer>
  )
}
