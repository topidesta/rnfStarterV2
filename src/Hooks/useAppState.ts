import {useEffect, useState} from 'react';
import AppStateHandler from 'src/AppState/AppStateHandler';

function useAppState(keyName?: string) {
  const [value, setValue]: any = useState(
    keyName ? AppStateHandler.getValue('keyName') : AppStateHandler.getState(),
  );
  useEffect(() => {
    const listener = AppStateHandler.subscriber$;
    listener.subscribe((state) => {
      if (keyName) {
        setValue(state[keyName]);
      } else {
        setValue(state);
      }
    });
    return () => {
      listener.unsubscribe();
    };
  }, [keyName]);

  return value;
}

export default useAppState;
