import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, HeaderItemContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <HeaderItemContainer itemColor="purple">
          <MapPin weight="fill" size={24} />
          Belo Horizonte, MG
        </HeaderItemContainer>
        <HeaderItemContainer itemColor="yellow">
          <NavLink to="/cart" title="Cart">
            <ShoppingCart weight="fill" size={24} />
          </NavLink>
        </HeaderItemContainer>
      </nav>
    </HeaderContainer>
  )
}
