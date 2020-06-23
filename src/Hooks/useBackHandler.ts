import {useCallback, useState} from 'react';

import {BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import useToast from './useToast';

function useBackHandler() {
  const [count, setCount] = useState(0);
  const {normalToast} = useToast();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setTimeout(() => {
          setCount(0);
        }, 3000);
        if (count === 1) {
          BackHandler.exitApp();
        } else {
          normalToast('Press again to exit');
        }
        setCount(count + 1);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [count]),
  );
}

export default useBackHandler;
