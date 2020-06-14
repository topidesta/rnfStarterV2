import React from 'react';
import {Appbar} from 'react-native-paper';
import {StackHeaderProps} from '@react-navigation/stack';

function Header(props: StackHeaderProps) {
  const {navigation, scene} = props;

  return (
    <Appbar.Header accessibilityStates>
      <Appbar.BackAction onPress={navigation.goBack} accessibilityStates />
      <Appbar.Content
        title={scene?.descriptor?.options?.headerTitle}
        accessibilityStates
      />
    </Appbar.Header>
  );
}

export default Header;
