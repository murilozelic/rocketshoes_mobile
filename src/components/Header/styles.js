import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  font-size: 14px;
  line-height: 18px;
  height: 64px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #141419;
`;

export const CartStatus = styled.TouchableOpacity`
  height: 26px;
  width: 24px;
`;

export const ItemCount = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #7159c1;
  position: absolute;
  right: -8px;
  top: -8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoButton = styled.TouchableOpacity``;

export const LogoImage = styled.Image`
  width: 185px;
  height: 24px;
`;

export const ItemCountText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
