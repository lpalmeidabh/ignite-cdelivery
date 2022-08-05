import {
  SuccessContainer,
  Title,
  Content,
  CheckoutInfo,
  ItemIcon,
  RainbowBox,
} from './styles'
import illustation from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
export function Success() {
  return (
    <SuccessContainer>
      <Title>Uhu! Pedido Confirmado</Title>
      <p>Agora é so aguardar que logo o café chegará até você</p>
      <Content>
        <RainbowBox>
          <CheckoutInfo>
            <ItemIcon itemColor="yellow">
              <span>
                <MapPin size={16} />
              </span>
              Entrega em <b>Rua XYZ, 123</b>
            </ItemIcon>
            <ItemIcon itemColor="purple">
              <span>
                <Timer size={16} />
              </span>
              Previsão de entrega: <b>20 minutos</b>
            </ItemIcon>
            <ItemIcon itemColor="yellow">
              <span>
                <CurrencyDollar size={16} />
              </span>
              Pagamento na entrega: <b>Cartão de Crédito</b>
            </ItemIcon>
          </CheckoutInfo>
        </RainbowBox>
        <img src={illustation} alt="" />
      </Content>
    </SuccessContainer>
  )
}
