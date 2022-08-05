import { CatalogItemCard } from '../../../../components/CatalogItemCard'
import { CatalogContainer, ListTitle, CatalogItems } from './styles'
import { coffeeData } from '../../../../data/coffees'
export function Catalog() {
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
