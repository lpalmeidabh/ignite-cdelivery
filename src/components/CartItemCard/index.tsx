import { CartItemCardContainer, ProductInfo, ProductPrice } from './styles'
import { AmountInput } from '../AmountInput'
import { RemoveButton } from '../../pages/Cart/RemoveButton'
import { useContext, useEffect, useState } from 'react'
import { CoffeeDeliveryContext } from '../../context/CoffeeDeliveryContext'

interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  info: string
  price: number
}

interface CartItemCardProps {
  coffeeId: number
}

export function CartItemCard({ coffeeId }: CartItemCardProps) {
  const {
    incrementAmount,
    decrementAmount,
    removeFromCart,
    retrieveCoffeeData,
  } = useContext(CoffeeDeliveryContext)
  const [itemPrice, setItemPrice] = useState('0')
  const selectedCoffee = retrieveCoffeeData(coffeeId)

  useEffect(() => {
    const price = selectedCoffee.coffee?.price
    const amount = selectedCoffee.amount
    setItemPrice(price ? (price * amount).toFixed(2) : '0')
  }, [selectedCoffee])

  function handleOnAdd() {
    incrementAmount(coffeeId)
  }
  function handleOnSub() {
    decrementAmount(coffeeId)
  }
  function handleRemoveFromCart() {
    removeFromCart(coffeeId)
  }

  return (
    <CartItemCardContainer>
      <img src={selectedCoffee.coffee?.image} alt="" />
      <ProductInfo>
        {selectedCoffee.coffee?.title}
        <span>
          <AmountInput
            onAdd={handleOnAdd}
            onSub={handleOnSub}
            amount={selectedCoffee.amount}
            height={32}
          />
          <RemoveButton onClick={handleRemoveFromCart} />
        </span>
      </ProductInfo>
      <ProductPrice>R$ {itemPrice}</ProductPrice>
    </CartItemCardContainer>
  )
}
