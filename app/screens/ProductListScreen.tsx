// src/components/Product/ProductListScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Dimensions,Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { fetchProducts } from '../utils/AxiosService';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductListScreen: React.FC = ({navigation}:any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const productsData:any[] = await fetchProducts();
      console.log({productsData})
      if(productsData && Array.isArray(productsData)){

        setProducts(productsData);
      }
      setLoading(false)
    };

    fetchProductsData();

  
  }, []);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product: any) => {
    dispatch(addToWishlist(product));
  };

  const renderProductItem = ({ item }: { item: any }) => (
    // <Card style={{ marginVertical: 8 }}>
    //   <Card.Content>
    //     <Title>{item.title}</Title>
    //     <Text>{item.category}</Text>
    //     <Text>₹ {item.price}</Text>

    //     <Paragraph> {item.description}</Paragraph>
        
    //     <Button onPress={() => handleAddToCart(item)}>Add to Cart</Button>
    //     <Button onPress={() => handleAddToWishlist(item)}>Add to Wishlist</Button>
    //   </Card.Content>
    // </Card>

    <ProductCard
    key={item.id}
    navigation={navigation}
    item={{...item, isNew: Number(item.id)%3===0}}
  />
  );
   const {width,height}= Dimensions.get('window')
  const styles = StyleSheet.create({
     mainBox :{
      width:width,
     }
  })

  return (
    <View style={styles.mainBox}>
      {loading  ? (
        // Display loading indicator while fetching data
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 16 }} />
      ) : (
        // Display product list once data is loaded
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default ProductListScreen;
