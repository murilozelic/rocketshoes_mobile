import styled from 'styled-components/native';

export const Container = styled.View`
  background: #141419;
  flex: 1;
  padding: 20px;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
  width: 100%;
  max-height: 358px;
  border-radius: 20px;
`;

export const ProductContainer = styled.View`
  width: 220px;
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  margin-right: ${props => (props.lastItem ? '0px' : '20px')};
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.Text`
  color: #000;
  font-weight: bold;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

export const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const AddCartCount = styled.Text`
  margin-left: 4px;
  color: #fff;
`;

export const AddToCart = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
