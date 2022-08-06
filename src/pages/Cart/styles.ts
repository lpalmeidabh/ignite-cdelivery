import styled from 'styled-components'

export const CartContainer = styled.main`
  width: 100%;
  display: flex;
  flex: 1;

  flex-direction: row;
  align-items: flex-start;

  gap: 2rem;
`

export const AreaTitle = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
`

export const UserDataSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`

export const AddressSection = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
  input {
    flex: 1;
    padding: 1rem;
    height: 2.625rem;
    font-size: 0.875rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 6px;
  }
`

export const PaymentSection = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const PaymentOptions = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const PaymentItem = styled.button`
  padding: 1rem;
  height: 3.1875rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 0;
  transition: 0.4s;
  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
  &:disabled {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }
`

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 0.875rem;

  span {
    font-size: 1rem;
  }

  margin-bottom: 2rem;
`
export const CheckoutSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`

export const ProductsSection = styled.div`
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
`

export const Separator = styled.div`
  align-self: stretch;
  border: 1px solid ${(props) => props.theme['base-hover']};
`

const ProductInfoBase = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`
export const PaymentInfo = styled(ProductInfoBase)`
  font-size: 0.875rem;
`

export const TotalPayment = styled(ProductInfoBase)`
  font-weight: bold;
  font-size: 1.125rem;
`

export const CheckoutButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 6px;
  height: 2.875rem;
  padding: 0.75rem;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
