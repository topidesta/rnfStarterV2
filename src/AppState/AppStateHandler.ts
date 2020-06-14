import ReactiveState from 'reactive-state-handler';

export type AppStateType = {
  loggedIn: boolean;
  user: any;
  jwt: string;
  loading: boolean;
};

export default new ReactiveState({
  loggedIn: false,
  user: null,
  jwt: '',
  loading: true,
});
