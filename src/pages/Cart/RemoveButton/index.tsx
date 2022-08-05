import { ButtonContainer } from './styles'
import { Trash } from 'phosphor-react'

export function RemoveButton() {
  return (
    <ButtonContainer>
      <Trash />
      Remover
    </ButtonContainer>
  )
}
