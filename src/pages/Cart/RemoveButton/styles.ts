import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  height: 2rem;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme['base-button']};
  font-size: 0.75rem;
  text-transform: uppercase;
  gap: 0.5rem;
  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`
