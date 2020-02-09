import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  List,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCart,
  AddButton,
  AddCartCount,
  AddButtonText,
} from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          horizontal
          renderItem={({ item, index }) => (
            <ProductContainer lastItem={index === products.length - 1}>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <AddButton>
                <AddToCart>
                  <Icon name="add-shopping-cart" size={16} color="#FFF" />
                  <AddCartCount>1</AddCartCount>
                </AddToCart>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </ProductContainer>
          )}
        />
      </Container>
    );
  }
}
