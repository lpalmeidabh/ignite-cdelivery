import styled from 'styled-components'

export const CatalogItemCardContainer = styled.header`
  /* padding-top: 5rem; */
  height: 310px;
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme['base-card']};
  padding: 0 1rem;
`
export const CatalogImage = styled.img`
  margin-top: -1rem;
`
export const Tags = styled.span`
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-direction: row;
  display: flex;
  gap: 0.25rem;
`
export const Tag = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 16px;
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
`

export const Title = styled.p`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
  font-size: 1.25rem;
  line-height: 1.3;
`
export const Text = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-bottom: 4.125rem;
  text-align: center;
`
export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;
`

export const Price = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
  }
`

export const CartForm = styled.div`
  width: 7.5rem;
  display: flex;
  gap: 0.5rem;
`
export const Quantity = styled.input`
  height: 2.375rem;
  /* width: 5rem; */
  /* text-align: center; */
  border-radius: 8px;
  border: 0;
  background-color: ${(props) => props.theme['base-button']};
`

export const AddToCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  display: flex;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['purple-dark']};
  &:hover {
    background: ${(props) => props.theme['purple-light']};
  }
  svg {
    color: ${(props) => props.theme.white};
  }
`

// const ITEM_COLORS = {
//   yellow: {
//     base: 'yellow',
//     light: 'yellow-light',
//     dark: 'yellow-dark',
//   },
//   purple: {
//     base: 'purple',
//     light: 'purple-light',
//     dark: 'purple-dark',
//   },
// } as const

// interface ItemProps {
//   itemColor: keyof typeof ITEM_COLORS
// }
// export const HeaderItemContainer = styled.span<ItemProps>`
//   height: 2.375rem;
//   display: flex;
//   gap: 0.5rem;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
//   border-radius: 8px;

//   background: ${(props) => props.theme[ITEM_COLORS[props.itemColor].light]};
//   color: ${(props) => props.theme[ITEM_COLORS[props.itemColor].dark]};
//   font-weight: bold;

//   svg {
//     color: ${(props) => props.theme[ITEM_COLORS[props.itemColor].dark]};
//   }
// `
