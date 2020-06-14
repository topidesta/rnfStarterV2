import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import useAppState from 'src/Hooks/useAppState';
import AppStateHandler, {AppStateType} from 'src/AppState/AppStateHandler';
import Container from 'src/Components/Container/Container';
import Center from 'src/Components/Center/Center';
import {ActivityIndicator} from 'react-native-paper';
import AuthStackNavigator from './AuthStackNavigator';
import RootStackNavigator from './RootStackNavigator';

function AppRouter() {
  const {loading, loggedIn}: AppStateType = useAppState();

  useEffect(() => {
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
