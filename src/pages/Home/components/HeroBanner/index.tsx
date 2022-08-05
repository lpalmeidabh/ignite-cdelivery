import {
  HeroBannerContainer,
  HeroTitle,
  HeroText,
  HeroItems,
  HeroItem,
} from './styles'
import heroImage from '../../../../assets/hero-image.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
export function HeroBanner() {
  return (
    <HeroBannerContainer>
      <div>
        <HeroTitle>
          Encontre o café perfeito para qualquer hora do dia
        </HeroTitle>
        <HeroText>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </HeroText>
        <HeroItems>
          <HeroItem itemColor="purple">
            <span>
              <ShoppingCart size={16} />
            </span>{' '}
            Compra simples e segura
          </HeroItem>
          <HeroItem itemColor="yellow">
            <span>
              <Timer size={16} />
            </span>
            Entrega rápida e rastreada
          </HeroItem>

          <HeroItem itemColor="purple">
            <span>
              <Package size={16} />
            </span>
            Embalagem mantém o café intacto
          </HeroItem>
          <HeroItem itemColor="purple">
            <span>
              <Coffee size={16} />
            </span>
            O café chega fresquinho até você
          </HeroItem>
        </HeroItems>
      </div>
      <div>
        <img src={heroImage} alt="" />
      </div>
    </HeroBannerContainer>
  )
}
