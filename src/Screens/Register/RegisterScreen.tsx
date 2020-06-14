import Body from 'src/Components/Body/Body';
import {Button} from 'react-native-paper';
import Container from 'src/Components/Container/Container';
import FormBuilder from 'react-native-paper-form-builder';
import Input from 'src/Components/Input/Input';
import Padding from 'src/Components/Padding/Padding';
import React from 'react';
import Spacer from 'src/Components/Spacer/Spacer';
import useRegisterScreen from './Hooks/useRegisterScreen';

function RegisterScreen() {
  const {form, formConfigArray, onSubmit} = useRegisterScreen();
  return (
    <Container>
      <Body>
        <Spacer size={25} />
        <Padding horizontal size={25}>
          <FormBuilder
            form={form}
            formConfigArray={formConfigArray}
            CustomInput={Input}>
            <Spacer />
            <Button mode={'contained'} onPress={onSubmit} accessibilityStates>
              Register
            </Button>
          </FormBuilder>
        </Padding>
      </Body>
    </Container>
  );
}

export default RegisterScreen;
