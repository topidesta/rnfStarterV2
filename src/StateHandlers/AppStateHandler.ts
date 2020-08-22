import {BehaviorSubject} from 'rxjs';
import {ReactiveState, useReactiveStateHandler} from 'reactive-state-handler';

export type AppStateType = {
  loggedIn: boolean;
  user: any;
  jwt: string;
  loading: boolean;
};

interface AppStateHandlerInterface {
  initialState: AppStateType;
  subscriber$: BehaviorSubject<AppStateType>;

  setState(values: Partial<AppStateType>): void;
  getState(): AppStateType;
  resetState(): void;
}

const AppStateHandler: AppStateHandlerInterface = new ReactiveState({
  loggedIn: false,
  user: null,
  jwt: '',
  loading: true,
});

export default AppStateHandler;

type addListener = () => void;

type removeListener = () => void;

export function useAppState(
  filterKeys?: Array<keyof AppStateType>,
): [Partial<AppStateType>, removeListener, addListener] {
  return useReactiveStateHandler(AppStateHandler, filterKeys);
}
