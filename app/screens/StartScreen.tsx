import React from 'react'
import Background from '../LoginComponents/Background'
import Logo from '../LoginComponents/Logo'
import Header from '../LoginComponents/Header'
import Button from '../LoginComponents/Button'
import { ScreenNames } from '../routing/ScreenNames'

export default function StartScreen({ navigation }:any) {
  return (
    <Background>
      <Logo />
      <Header>React Native Cart System</Header>
      {/* <Paragraph>
       React Native Cart System
      </Paragraph> */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate(ScreenNames.Login)}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate(ScreenNames.SignUp)}
      >
        Sign Up
      </Button>
    </Background>
  )
}
