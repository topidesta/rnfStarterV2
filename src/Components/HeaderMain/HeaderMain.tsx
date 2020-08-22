import AppStateHandler from 'src/StateHandlers/AppStateHandler';
import {Appbar} from 'react-native-paper';
import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';

function HeaderMain(props: StackHeaderProps) {
  const {scene} = props;

  return (
    <Appbar.Header accessibilityStates>
      <Appbar.Content
        title={scene?.descriptor?.options?.headerTitle}
        accessibilityStates
      />
      <Appbar.Action
        icon={'logout'}
        onPress={() => {
          AppStateHandler.resetState();
          setTimeout(() => {
            AppStateHandler.setState({
              loading: false,
            });
          }, 2000);
        }}
        accessibilityStates
      />
    </Appbar.Header>
  );
}

export default HeaderMain;
