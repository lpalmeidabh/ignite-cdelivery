import styled from 'styled-components'

export const HeroBannerContainer = styled.div`
  width: 100%;
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeroTitle = styled.p`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
  font-size: 4rem;
  line-height: 1.3;
`
export const HeroText = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: 4.125rem;
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

export const HeroItems = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex-direction: column;
  gap: 0.5rem 2rem;
`

export const HeroItem = styled.span<ItemProps>`
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
