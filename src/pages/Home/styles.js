import styled from 'styled-components/native';

export const Container = styled.View`
  background: #141419;
  flex: 1;
  padding: 20px;
`;

export const HeaderContainer = styled.View`
  font-size: 14px;
  line-height: 18px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  text-transform: capitalize;
  color: #fff;
`;

export const CartStatus = styled.View`
  height: 64px;
  width: 20px;
  background: #fff;
`;

export const LogoContainer = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #ccc;
  align-items: center;
`;
