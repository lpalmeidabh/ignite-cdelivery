import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  /* position: sticky; */
  top: 0;
  left: 0;
  z-index: 1;

  nav {
    display: flex;
    gap: 0.5rem;
  }
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
export const HeaderItemContainer = styled.span<ItemProps>`
  max-height: 2.375rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;

  background: ${(props) => props.theme[ITEM_COLORS[props.itemColor].light]};
  color: ${(props) => props.theme[ITEM_COLORS[props.itemColor].dark]};
  font-weight: bold;

  svg {
    color: ${(props) => props.theme[ITEM_COLORS[props.itemColor].dark]};
  }
`
