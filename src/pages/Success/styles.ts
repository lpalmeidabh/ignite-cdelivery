import styled from 'styled-components'

export const SuccessContainer = styled.div`
  font-size: 1.25rem;
`

export const Title = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme['yellow-dark']};
`
export const Content = styled.div`
  margin-top: 2.5rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const RainbowBox = styled.div`
  flex: 1;
  position: relative;
  padding: 20px 30px;
  margin: 5px;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px 6px 36px;
    padding: 2px; /* control the border thickness */
    background: linear-gradient(
      270deg,
      ${(props) => props.theme.purple},
      ${(props) => props.theme.yellow}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* justify-content: center; */
  padding: 2.5rem;
`

const ITEM_COLORS = {
  yellow: {
    base: 'yellow',
    light: 'yellow-light',
    dark: 'yellow-dark',
  },
  purple: {
    base: 'purple',
    light: 'purple-light',
    dark: 'purple-dark',
  },
} as const

interface ItemProps {
  itemColor: keyof typeof ITEM_COLORS
}

export const ItemIcon = styled.span<ItemProps>`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  span {
    display: flex;
    width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme[ITEM_COLORS[props.itemColor].base]};
    border-radius: 50%;

    color: ${(props) => props.theme.white};
  }
`
