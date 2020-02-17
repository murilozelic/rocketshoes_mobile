import styled from 'styled-components/native';

export const Container = styled.View`
  background: #141419;
  flex: 1;
  padding: 20px;
`;

export const CartContainer = styled.View`
  padding: 10px;
  background: #fff;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  height: 400px;
`;

export const ProductContainer = styled.View`
  margin-bottom: 5px;
  flex-direction: column;
  align-items: center;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImg = styled.Image`
  width: 80px;
  height: 80px;
  background: #fff;
`;

export const ProductDescription = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 5px;
`;

export const ProductTitle = styled.Text`
  flex: 1;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
`;

export const SubTotalContainer = styled.View`
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-radius: 4px;
  background: #eee;
`;

export const ProductQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const SubTotalPrice = styled.Text`
  margin-right: 5px;
  font-weight: bold;
`;

export const QuantityTextInput = styled.TextInput`
  margin: 0 2px;
  font-size: 12px;
  padding: 0 10px;
  height: 26px;
  width: 50px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #666;
`;

export const ProductQuantityRemoveButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const ProductQuantityAddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const Total = styled.View`
  margin-top: 10px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TotalText = styled.Text`
  color: #999999;
  font-weight: bold;
  font-size: 16px;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const CheckOutButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 20px;
  border-radius: 4px;
  background: #7159c1;
`;

export const CheckOutButtonText = styled.Text.attrs({
  'text-transform': 'capitalize',
})`
  color: #fff;
  font-weight: bold;
`;
