import { CartItemCardContainer, ProductInfo, ProductPrice } from './styles'
import { AmountInput } from '../AmountInput'
import { RemoveButton } from '../../pages/Cart/RemoveButton'

import expresso from '../../assets/coffee/expresso.png'
export function CartItemCard() {
  return (
    <CartItemCardContainer>
      <img src={expresso} alt="" />
      <ProductInfo>
        Espresso Tradicional
        <span>
          <AmountInput
            onAdd={() => {}}
            onSub={() => {}}
            amount={1}
            height={32}
          />
          <RemoveButton />
        </span>
      </ProductInfo>
      <ProductPrice>R$ 19,90</ProductPrice>
    </CartItemCardContainer>
  )
}
