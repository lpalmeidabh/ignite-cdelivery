import { Minus, Plus } from 'phosphor-react'
import { Amount, AmountInputContainer } from './styles'

interface AmountInputProps {
  onAdd: () => void
  onSub: () => void
  amount: number
  height?: number
}
export function AmountInput({
  onAdd,
  onSub,
  amount,
  height = 38,
}: AmountInputProps) {
  return (
    <AmountInputContainer buttonHeight={height}>
      <Minus onClick={onSub} size={14} weight="fill" />
      <Amount>{amount}</Amount>
      <Plus onClick={onAdd} size={14} weight="fill" />
    </AmountInputContainer>
  )
}
