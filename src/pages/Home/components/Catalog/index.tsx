import { useContext } from 'react'
import { CatalogItemCard } from '../../../../components/CatalogItemCard'
import { CoffeeDeliveryContext } from '../../../../context/CoffeeDeliveryContext'
import { CatalogContainer, ListTitle, CatalogItems } from './styles'

export function Catalog() {
  const { coffeeData } = useContext(CoffeeDeliveryContext)
  return (
    <CatalogContainer>
      <ListTitle>Nossos Cafés</ListTitle>
      <CatalogItems>
        {coffeeData.map((coffee) => {
          return <CatalogItemCard key={coffee.id} coffee={coffee} />
        })}
      </CatalogItems>
    </CatalogContainer>
  )
}
