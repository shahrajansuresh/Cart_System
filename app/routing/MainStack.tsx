import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import ProductListScreen from '../screens/ProductListScreen';
import CartScreen from '../screens/CartScreen';
import WishlistScreen from '../screens/WishlistScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen, StartScreen } from '../screens';
import { ScreenNames } from './ScreenNames';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.Login}>
        <Stack.Screen name={ScreenNames.Start} component={StartScreen} options={{headerShown:false}}/>
        <Stack.Screen name={ScreenNames.Login} component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name={ScreenNames.SignUp} component={RegisterScreen} options={{headerShown:false}}/>

        <Stack.Screen name={ScreenNames.productList} component={ProductListScreen} />
        <Stack.Screen name={ScreenNames.cartList} component={CartScreen} />
        <Stack.Screen name={ScreenNames.wishList} component={WishlistScreen} />
        {/* Add other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;