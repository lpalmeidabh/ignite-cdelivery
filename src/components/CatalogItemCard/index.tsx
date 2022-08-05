import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeDeliveryContext } from '../../context/CoffeeDeliveryContext'
import { ItemIcon } from '../../pages/Success/styles'
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
  const { cart, addToCart } = useContext(CoffeeDeliveryContext)
  const isCoffeeOnCart = cart.find((item) => item.id === coffee.id)
  const coffeeAmount = isCoffeeOnCart ? isCoffeeOnCart.amount : 0
  const [amount, setAmount] = useState(coffeeAmount)

  function handleAdd() {
    setAmount((state) => state + 1)
  }

  function handleSub() {
    if (amount >= 1) {
      setAmount((state) => state - 1)
    }
  }

  function handleAddToCart() {
    addToCart(coffee.id, amount)
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
          <AddToCartButton onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </AddToCartButton>
        </CartForm>
      </Footer>
    </CatalogItemCardContainer>
  )
}
