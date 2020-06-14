import {useForm} from 'react-hook-form';
import {useMemo} from 'react';

function useRegisterScreen() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const formConfigArray: any = useMemo(
    () => [
      {
        type: 'input',
        name: 'name',
        label: 'Name',
        rules: {
          required: {
            value: true,
            message: 'Name is required',
          },
        },
        textInputProps: {
          leftIcon: 'account',
        },
      },
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
          leftIcon: 'email',
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
          leftIcon: 'lock',
        },
      },
    ],
    [],
  );

  const onSubmit = form.handleSubmit(() => {});

  return {form, formConfigArray, onSubmit};
}

export default useRegisterScreen;
