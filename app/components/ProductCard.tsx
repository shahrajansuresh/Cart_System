import React from 'react';
import {View, Text, Pressable, Image,Button} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../utils/appColors';
import Label from './Label';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';

export default function ProductCard({navigation, item,}:any) {
  const {title, description, price, image, } = item;
  const dispatch = useDispatch();
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product: any) => {
    dispatch(addToWishlist(product));
  };
  return (
    <View >
      <View
        style={{
          height: scale(200),
           width: scale(160),
          //backgroundColor:appColors.lightGray
        }}>
        <Image 
        resizeMode='contain'
        style={{height:scale(200), width:scale(180)}} 
        source={{ uri:image}} />
        
          <View
            style={{
              backgroundColor:appColors.red,
              position: 'absolute',
              top: scale(10),
              right: scale(20),
              padding: scale(3),
              borderRadius: scale(3),
              paddingHorizontal: scale(10),
            }}>
             
            <Label text="New" style={{fontSize:scale(10), color:appColors.white}} />
          </View>
       
      </View>
      <View style={{paddingVertical: scale(3)}}>
        <Label text={title?.substring(0, 20)} style={{fontSize: scale(18), fontWeight: '500'}} />
      </View>

      <View style={{paddingVertical: scale(2)}}>
        <Label
          text={description?.substring(0, 24)}
          style={{fontSize: scale(13), color: appColors.darkGray}}
        />
      </View>

      <View style={{paddingVertical: scale(5)}}>
        <Label
          text={price}
          style={{
            fontSize: scale(18),
            color: appColors.primary,
            fontWeight: '500',
          }}
        />
      </View>
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      <Button title="Add to Wishlist" onPress={() => handleAddToWishlist(item)} />
    </View>
  );
}
