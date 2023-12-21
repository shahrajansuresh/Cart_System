// src/services/apiService.ts
import axios from 'axios';
import {Alert} from 'react-native';

const API_BASE_URL = 'https://www.fakeshop-api.com';

export const fetchProducts = async () => {
  try {
    let response = await axios.get('https://fakestoreapi.com/products')
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    Alert.alert(`${error}`);
  }
};
