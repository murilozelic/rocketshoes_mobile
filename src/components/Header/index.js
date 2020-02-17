import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Logo from '../../assets/images/Logo.png';

import {
  HeaderContainer,
  CartStatus,
  ItemCount,
  ItemCountText,
  LogoButton,
  LogoImage,
} from './styles';

function Header({ navigation: { navigate }, cartSize }) {
  return (
    <HeaderContainer>
      <LogoButton onPressOut={() => navigate('Home')}>
        <LogoImage source={Logo} />
      </LogoButton>
      <CartStatus onPressOut={() => navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        <ItemCount>
          <ItemCountText>{cartSize}</ItemCountText>
        </ItemCount>
      </CartStatus>
    </HeaderContainer>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
