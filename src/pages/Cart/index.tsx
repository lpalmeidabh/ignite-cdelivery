import {
  CartContainer,
  AreaTitle,
  SectionHeader,
  HeaderTitle,
  UserDataSection,
  AddressSection,
  AddressForm,
  PaymentSection,
  PaymentOptions,
  PaymentItem,
  CheckoutSection,
  ProductsSection,
  Separator,
  PaymentInfo,
  TotalPayment,
  CheckoutButton,
} from './styles'

import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { CartItemCard } from '../../components/CartItemCard'

export function Cart() {
  return (
    <CartContainer>
      <UserDataSection>
        <AreaTitle>Complete seu Pedido</AreaTitle>
        <AddressSection>
          <SectionHeader>
            <MapPin size={22} />
            <HeaderTitle>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </HeaderTitle>
          </SectionHeader>
          <AddressForm>
            <input placeholder="CEP" />
            <div>
              <input placeholder="Rua" />
            </div>
            <div>
              <input placeholder="Número" />
              <input placeholder="Complemento" />
            </div>
            <div>
              <input placeholder="Bairro" />
              <input placeholder="Cidade" />
              <input placeholder="UF" />
            </div>
          </AddressForm>
        </AddressSection>
        <PaymentSection>
          <SectionHeader>
            <CurrencyDollar size={22} />
            <HeaderTitle>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </HeaderTitle>
          </SectionHeader>
          <PaymentOptions>
            <PaymentItem>
              <CreditCard size={16} />
              Cartão de Crédito
            </PaymentItem>
            <PaymentItem>
              <Bank size={16} />
              Cartão de Débito
            </PaymentItem>
            <PaymentItem>
              <Money size={16} />
              Dinheiro
            </PaymentItem>
          </PaymentOptions>
        </PaymentSection>
      </UserDataSection>
      <CheckoutSection>
        <AreaTitle>Cafés Selecionados</AreaTitle>
        <ProductsSection>
          <CartItemCard />
          <Separator />
          <CartItemCard />
          <Separator />

          <PaymentInfo>
            <span>Total de itens</span>
            <span>R$ 19,90</span>
          </PaymentInfo>
          <PaymentInfo>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </PaymentInfo>
          <TotalPayment>
            <span>Total</span>
            <span>R$ 33,99</span>
          </TotalPayment>
          <CheckoutButton>Confirmar Pedido</CheckoutButton>
        </ProductsSection>
      </CheckoutSection>
    </CartContainer>
  )
}
