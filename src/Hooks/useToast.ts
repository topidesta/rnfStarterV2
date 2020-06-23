import Snackbar from 'react-native-snackbar';
import {useTheme} from 'react-native-paper';

type ActionType = {
  text: string;
  textColor: string;
  onPress: () => void;
};

function useToast() {
  const Theme = useTheme();

  const errorToast = (text: string, action?: ActionType) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: Theme.colors.error,
      action,
    });
  };

  const successToast = (text: string, action?: ActionType) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#4BB543',
      action,
    });
  };

  const normalToast = (text: string, action?: ActionType) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: Theme.colors.onSurface,
      action,
    });
  };

  return {errorToast, successToast, normalToast};
}

export default useToast;
