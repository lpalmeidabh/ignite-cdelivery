import { ButtonContainer } from './styles'
import { Trash } from 'phosphor-react'

interface RemoveButtonProps {
  onClick: () => void
}
export function RemoveButton({ onClick }: RemoveButtonProps) {
  return (
    <ButtonContainer onClick={onClick}>
      <Trash />
      Remover
    </ButtonContainer>
  )
}
