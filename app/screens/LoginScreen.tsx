import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../LoginComponents/Background';
import Logo from '../LoginComponents/Logo';
import Header from '../LoginComponents/Header';
import Button from '../LoginComponents/Button';
import TextInput from '../LoginComponents/TextInput';
import BackButton from '../LoginComponents/BackButton';
import {theme} from '../core/theme';
import {emailValidator} from '../helpers/emailValidator';
import {passwordValidator} from '../helpers/passwordValidator';
import {FIREBASE_AUTH} from '../../FirebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {ScreenNames} from '../routing/ScreenNames';
import {useDispatch} from 'react-redux';
import {setUser, setError, setLoading} from '../redux/slices/userSlice';

export default function LoginScreen({navigation}: any) {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const auth = FIREBASE_AUTH;
  const dispatch = useDispatch();
  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    try {
      console.log(auth, email.value, password.value);
      const response = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value,
      );
      console.log(JSON.stringify(response, null, 2));

      if (response.user) {
        dispatch(setUser(response.user));
        // Navigate to your main app screen
        navigation.navigate(ScreenNames.productList);
      }
    } catch (error) {
      console.error(error);
      dispatch(setError(`${error}`));
    } finally {
      dispatch(setLoading(false));
    }

    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.replace(ScreenNames.SignUp)}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
