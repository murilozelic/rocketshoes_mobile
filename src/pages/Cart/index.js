import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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
  DeleteProductButton,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useSelector(state =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.amount * product.price;
    }, 0)
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {total ? (
        <CartContainer>
          <ProductList
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <ProductContainer>
                <Product>
                  <ProductImg source={{ uri: item.image }} />
                  <ProductDescription>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.priceFormatted}</ProductPrice>
                  </ProductDescription>
                  <DeleteProductButton
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                  >
                    <Icon name="delete-forever" size={20} color="#7159c1" />
                  </DeleteProductButton>
                </Product>
                <SubTotalContainer>
                  <ProductQuantity>
                    <ProductQuantityRemoveButton
                      onPress={() => decrement(item)}
                    >
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </ProductQuantityRemoveButton>
                    <QuantityTextInput maxLength={2} keyboardType="numeric">
                      {item.amount}
                    </QuantityTextInput>
                    <ProductQuantityAddButton onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </ProductQuantityAddButton>
                  </ProductQuantity>
                  <SubTotalPrice>{item.subtotal}</SubTotalPrice>
                </SubTotalContainer>
              </ProductContainer>
            )}
          />
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{formatPrice(total)}</TotalPrice>
          </Total>
          <CheckOutButton>
            <CheckOutButtonText>FINALIZAR PEDIDO</CheckOutButtonText>
          </CheckOutButton>
        </CartContainer>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#000" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}
