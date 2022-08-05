import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { AmountInput } from '../AmountInput'
import {
  CatalogItemCardContainer,
  CatalogImage,
  Tags,
  Tag,
  Title,
  Text,
  Footer,
  Price,
  CartForm,
  Quantity,
  AddToCartButton,
} from './styles'

interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  info: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}
export function CatalogItemCard({ coffee }: CoffeeProps) {
  const [amount, setAmount] = useState(0)

  function handleAdd() {
    setAmount((state) => state + 1)
  }

  function handleSub() {
    if (amount >= 1) {
      setAmount((state) => state - 1)
    }
  }

  return (
    <CatalogItemCardContainer>
      <CatalogImage src={coffee.image} />
      <Tags>
        {coffee.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>
        })}
      </Tags>
      <Title>{coffee.title}</Title>
      <Text>{coffee.info}</Text>
      <Footer>
        <Price>
          R$<span>{coffee.price}</span>
        </Price>
        <CartForm>
          <AmountInput onAdd={handleAdd} onSub={handleSub} amount={amount} />
          <AddToCartButton>
            <ShoppingCart weight="fill" size={22} />
          </AddToCartButton>
        </CartForm>
      </Footer>
    </CatalogItemCardContainer>
  )
}
