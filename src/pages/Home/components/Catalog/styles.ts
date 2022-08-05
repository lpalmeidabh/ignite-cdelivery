import styled from 'styled-components'

export const CatalogContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 5.875rem;
  flex-direction: column;
`
export const ListTitle = styled.p`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
  font-size: 2rem;
  line-height: 1.3;
`

export const CatalogItems = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  flex-direction: column;
  gap: 4rem;
`
