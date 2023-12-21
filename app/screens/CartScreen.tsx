// src/components/Cart/CartScreen.tsx
import React from 'react';
import { View, FlatList } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/slices/cartSlice';
import { selectCartItems } from '../redux/slices/cartSlice';
import { RootState } from '../redux/store';

const CartScreen: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => selectCartItems(state));

  const handleIncrement = (itemId: number) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId: number) => {
    dispatch(decrementQuantity(itemId));
  };

  const renderCartItem = ({ item }: { item: any }) => (
    <Card style={{ marginVertical: 8 }}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>Quantity: {item.quantity}</Paragraph>
        <Button onPress={() => handleIncrement(item.id)}>+</Button>
        <Button onPress={() => handleDecrement(item.id)}>-</Button>
      </Card.Content>
    </Card>
  );

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CartScreen;
