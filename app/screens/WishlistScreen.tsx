// src/components/Wishlist/WishlistScreen.tsx
import React from 'react';
import { View, FlatList } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { selectWishlistItems } from '../redux/slices/wishlistSlice';
import { RootState } from '../redux/store';

const WishlistScreen: React.FC = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => selectWishlistItems(state));

  const handleRemoveFromWishlist = (itemId: number) => {
    dispatch(removeFromWishlist(itemId));
  };

  const renderWishlistItem = ({ item }: { item: any }) => (
    <Card style={{ marginVertical: 8 }}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Button onPress={() => handleRemoveFromWishlist(item.id)}>Remove</Button>
      </Card.Content>
    </Card>
  );

  return (
    <View>
      <FlatList
        data={wishlistItems}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default WishlistScreen;
