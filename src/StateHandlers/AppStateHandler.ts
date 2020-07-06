import {BehaviorSubject} from 'rxjs';
import ReactiveState from 'reactive-state-handler';
import useReactiveStateHandler from 'src/Hooks/useReactiveStateHandler';

export type AppStateType = {
  loggedIn: boolean;
  user: any;
  jwt: string;
  loading: boolean;
};

interface AppStateHandlerInterface {
  initialState: AppStateType;
  subscriber$: BehaviorSubject<AppStateType>;

  setValue(keyName: 'loggedIn', value: boolean): void;
  setValue(keyName: 'user', value: any): void;
  setValue(keyName: 'jwt', value: string): void;
  setValue(keyName: 'loading', value: boolean): void;

  getValue(keyName: 'loggedIn'): boolean;
  getValue(keyName: 'user'): any;
  getValue(keyName: 'jwt'): string;
  getValue(keyName: 'loading'): boolean;

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

export function useAppState(): AppStateType;

export function useAppState(keyName: 'loggedIn'): boolean;
export function useAppState(keyName: 'user'): any;
export function useAppState(keyName: 'jwt'): string;
export function useAppState(keyName: 'loading'): boolean;

export function useAppState(keyName?: keyof AppStateType) {
  return useReactiveStateHandler(AppStateHandler, keyName);
}
