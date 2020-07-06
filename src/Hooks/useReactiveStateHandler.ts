import {useEffect, useRef, useState} from 'react';

import {Subscription} from 'rxjs';

function useReactiveStateHandler(Handler: any, keyName?: string) {
  const listenerRef = useRef<Subscription>();
  const [value, setValue]: any = useState(
    keyName ? Handler.getValue(keyName) : Handler.getState(),
  );
  useEffect(() => {
    listenerRef.current = Handler.subscriber$.subscribe((state: any) => {
      if (keyName) {
        setValue(state[keyName]);
      } else {
        setValue(state);
      }
    });
    return () => {
      if (listenerRef.current) {
        listenerRef.current.unsubscribe();
      }
    };
  }, [Handler.subscriber$, keyName]);

  return value;
}

export default useReactiveStateHandler;
