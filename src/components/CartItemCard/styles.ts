import styled from 'styled-components'

export const CartItemCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  line-height: 1.6;

  img {
    height: 4rem;
  }
`

export const ProductInfo = styled.div`
  flex: 1;
  span {
    height: 2rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`

export const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
`
