import AppStateHandler, {useAppState} from 'src/StateHandlers/AppStateHandler';
import React, {useEffect} from 'react';

import {ActivityIndicator} from 'react-native-paper';
import AuthStackNavigator from './AuthStackNavigator';
import Center from 'src/Components/Center/Center';
import Container from 'src/Components/Container/Container';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import SplashScreen from 'react-native-splash-screen';

function AppRouter() {
  const [{loggedIn, loading}] = useAppState(['loggedIn', 'loading', 'user']);

  console.log(loggedIn, loading);

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      AppStateHandler.setValue('loading', false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Container>
        <Center allAxis>
          <ActivityIndicator size={'large'} accessibilityStates />
        </Center>
      </Container>
    );
  }

  return (
    <NavigationContainer>
      {loggedIn ? <AuthStackNavigator /> : <RootStackNavigator />}
    </NavigationContainer>
  );
}

export default AppRouter;
