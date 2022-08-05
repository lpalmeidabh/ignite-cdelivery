import { createContext, ReactNode, useEffect, useState } from 'react'
import { coffeeData } from '../data/coffees'

interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  info: string
  price: number
}

interface Cart {
  id: number
  amount: number
}

interface CustomerInfo {
  zipcode: string
  street: string
  number: number
  complement: string
  nighborhood: string
  city: string
  state: string
  paymentOption: string
}

interface CoffeeItem {
  coffee: Coffee | undefined
  amount: number
}

interface CoffeeDeliveryContextType {
  coffeeData: Coffee[]
  cart: Cart[]
  customerInfo: CustomerInfo
  addToCart: (id: number, amount: number) => void
  removeFromCart: (id: number) => void
  incrementAmount: (id: number) => void
  decrementAmount: (id: number) => void
  completeCheckout: (data: CustomerInfo) => void
  retrieveCoffeeData: (id: number) => CoffeeItem
}

export const CoffeeDeliveryContext = createContext(
  {} as CoffeeDeliveryContextType,
)

interface CoffeDeliveryContextProviderProps {
  children: ReactNode
}

export function CoffeeDeliveryContextProvider({
  children,
}: CoffeDeliveryContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>(
    {} as CustomerInfo,
  )

  function addToCart(id: number, amount: number) {
    if (cart.length > 0) {
      const itemExists = cart.find((item) => item.id === id)
      console.log(itemExists)
      if (itemExists) {
        const updatedCart = cart.map((item) => {
          if (item.id === id) {
            return { id, amount: item.amount + amount }
          } else return item
        })
        setCart(updatedCart)
      } else {
        setCart([...cart, { id, amount }])
      }
    } else {
      setCart([{ id, amount }])
    }
  }
  function removeFromCart(id: number) {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }
  function incrementAmount(id: number) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { id: item.id, amount: item.amount + 1 }
      }
      return item
    })
    setCart(updatedCart)
  }
  function decrementAmount(id: number) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { id: item.id, amount: item.amount > 1 ? item.amount - 1 : 1 }
      } else return item
    })

    setCart(updatedCart)
  }

  function completeCheckout(data: CustomerInfo) {
    setCustomerInfo(data)
  }

  function retrieveCoffeeData(id: number) {
    const amount = cart.find((item) => item.id === id)?.amount
    const selectedCoffee = coffeeData.find((item) => item.id === id)
    return { coffee: selectedCoffee, amount: amount || 0 }
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <CoffeeDeliveryContext.Provider
      value={{
        coffeeData,
        cart,
        customerInfo,
        addToCart,
        removeFromCart,
        incrementAmount,
        decrementAmount,
        completeCheckout,
        retrieveCoffeeData,
      }}
    >
      {children}
    </CoffeeDeliveryContext.Provider>
  )
}
