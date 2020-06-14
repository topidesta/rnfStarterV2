import {Button} from 'react-native-paper';
import Center from 'src/Components/Center/Center';
import Container from 'src/Components/Container/Container';
import Logo from './Components/Logo/Logo';
import Padding from 'src/Components/Padding/Padding';
import React from 'react';
import Row from 'src/Components/Row/Row';
import Spacer from 'src/Components/Spacer/Spacer';
import useLandingScreen from './Hooks/useLandingScreen';

function LandingScreen() {
  const {styles, goToLogin, goToRegister} = useLandingScreen();
  return (
    <Container>
      <Row flex={2} style={styles.topStyle}>
        <Center vertical>
          <Logo />
        </Center>
      </Row>
      <Row flex={1}>
        <Center vertical>
          <Padding horizontal size={25}>
            <Button mode={'contained'} onPress={goToLogin} accessibilityStates>
              Login
            </Button>
            <Spacer size={25} />
            <Button
              mode={'outlined'}
              onPress={goToRegister}
              accessibilityStates>
              Register
            </Button>
          </Padding>
        </Center>
      </Row>
    </Container>
  );
}

export default LandingScreen;
