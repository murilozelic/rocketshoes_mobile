import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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

export default function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((productAmount, product) => {
      productAmount[product.id] = product.amount;

      return productAmount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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
            <AddButton onPress={() => handleAddProduct(item.id)}>
              <AddToCart>
                <Icon name="add-shopping-cart" size={16} color="#FFF" />
                <AddCartCount>{amount[item.id] || 0}</AddCartCount>
              </AddToCart>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </ProductContainer>
        )}
      />
    </Container>
  );
}
