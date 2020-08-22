import AppStateHandler from 'src/StateHandlers/AppStateHandler';
import {useForm} from 'react-hook-form';
import {useMemo} from 'react';

function useLoginScreen() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const formConfigArray: any = useMemo(
    () => [
      {
        type: 'input',
        name: 'email',
        label: 'Email',
        rules: {
          required: {
            value: true,
            message: 'Email is required',
          },
        },
        textInputProps: {
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        },
      },
      {
        type: 'input',
        name: 'password',
        label: 'Password',
        rules: {
          required: {
            value: true,
            message: 'Password is required',
          },
        },
        textInputProps: {
          secureTextEntry: true,
        },
      },
    ],
    [],
  );

  const onSubmit = form.handleSubmit(() => {
    AppStateHandler.setState({loggedIn: true});
  });

  return {form, formConfigArray, onSubmit};
}

export default useLoginScreen;
