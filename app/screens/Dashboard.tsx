import React from 'react'
import Background from '../LoginComponents/Background'
import Logo from '../LoginComponents/Logo'
import Header from '../LoginComponents/Header'
import Paragraph from '../LoginComponents/Paragraph'
import Button from '../LoginComponents/Button'

export default function Dashboard({ navigation }:any) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
