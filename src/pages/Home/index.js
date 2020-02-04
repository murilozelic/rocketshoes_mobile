import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../assets/images/Logo.svg';

import {
  Container,
  HeaderContainer,
  HeaderTitle,
  LogoContainer,
} from './styles';

export default function Home() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Rocketshoes</HeaderTitle>
        <Icon name="account-circle" size={20} color="#4F8EF7" />
        <LogoContainer source={Logo} />
      </HeaderContainer>
    </Container>
  );
}
