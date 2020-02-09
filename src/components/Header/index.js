import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../assets/images/Logo.png';

import {
  HeaderContainer,
  CartStatus,
  ItemCount,
  ItemCountText,
  LogoButton,
  LogoImage,
} from './styles';

export default function Header({ navigation: { navigate } }) {
  return (
    <HeaderContainer>
      <LogoButton onPressOut={() => navigate('Home')}>
        <LogoImage source={Logo} />
      </LogoButton>
      <CartStatus onPressOut={() => navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        <ItemCount>
          <ItemCountText>3</ItemCountText>
        </ItemCount>
      </CartStatus>
    </HeaderContainer>
  );
}
