import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

function useLandingScreen() {
  const Theme = useTheme();
  const navigation = useNavigation();

  const goToLogin = () => navigation.navigate('Login');

  const goToRegister = () => navigation.navigate('Register');

  const styles = useMemo(
    () =>
      StyleSheet.create({
        topStyle: {
          backgroundColor: Theme.colors.background,
        },
      }),
    [Theme.colors.background],
  );

  return {styles, goToLogin, goToRegister};
}

export default useLandingScreen;
