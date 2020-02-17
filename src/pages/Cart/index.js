import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import {
  Container,
  CartContainer,
  ProductList,
  ProductContainer,
  Product,
  ProductImg,
  ProductDescription,
  ProductTitle,
  ProductPrice,
  SubTotalContainer,
  ProductQuantity,
  SubTotalPrice,
  Total,
  TotalText,
  TotalPrice,
  CheckOutButton,
  CheckOutButtonText,
  QuantityTextInput,
  ProductQuantityRemoveButton,
  ProductQuantityAddButton,
} from './styles';

import api from '../../services/api';

export default class Cart extends Component {
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
        <CartContainer>
          <ProductList
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <ProductContainer>
                <Product>
                  <ProductImg source={{ uri: item.image }} />
                  <ProductDescription>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.priceFormatted}</ProductPrice>
                  </ProductDescription>
                </Product>
                <SubTotalContainer>
                  <ProductQuantity>
                    <ProductQuantityRemoveButton>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </ProductQuantityRemoveButton>
                    <QuantityTextInput maxLength={2} keyboardType="numeric" />
                    <ProductQuantityAddButton>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </ProductQuantityAddButton>
                  </ProductQuantity>
                  <SubTotalPrice>R$ 400,00</SubTotalPrice>
                </SubTotalContainer>
              </ProductContainer>
            )}
          />
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>R$ 400,00</TotalPrice>
          </Total>
          <CheckOutButton>
            <CheckOutButtonText>FINALIZAR PEDIDO</CheckOutButtonText>
          </CheckOutButton>
        </CartContainer>
      </Container>
    );
  }
}
