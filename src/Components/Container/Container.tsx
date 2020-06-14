import React, {Fragment, useMemo} from 'react';
import {
  View,
  Platform,
  SafeAreaView,
  ViewStyle,
  StatusBar,
  ViewProps,
  StyleSheet,
  StatusBarStyle,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import VisibilityToggle from '../VisibilityToggle/VisibilityToggle';

type ContainerProps = {
  style?: ViewStyle;
  children?: any;
  containerProps?: ViewProps;
  statusBarStyle?: StatusBarStyle;
  statusBarBackgroundColor?: string;
  fullScreen?: boolean;
};

function Container({
  style,
  children,
  containerProps,
  statusBarStyle,
  statusBarBackgroundColor,
  fullScreen,
}: ContainerProps) {
  const Theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        iOSContainerStyle: {
          flex: 1,
          backgroundColor: Theme.colors.surface,
          ...style,
        },
        iOSSafeAreaStyle: {
          flex: 0,
          backgroundColor: statusBarBackgroundColor || Theme.colors.primary,
        },
        androidContainerStyle: {
          flex: 1,
          backgroundColor: Theme.colors.surface,
          ...style,
        },
      }),
    [Theme, style, statusBarBackgroundColor],
  );

  return (
    <Fragment>
      <StatusBar
        barStyle={statusBarStyle || 'light-content'}
        backgroundColor={statusBarBackgroundColor || Theme.colors.primary}
        translucent={fullScreen || false}
      />
      <VisibilityToggle visible={Platform.OS === 'ios'}>
        <VisibilityToggle visible={fullScreen ? true : false}>
          <View style={styles.androidContainerStyle} {...containerProps}>
            {children}
          </View>
        </VisibilityToggle>
        <VisibilityToggle visible={fullScreen ? false : true}>
          <SafeAreaView style={styles.iOSSafeAreaStyle} />
          <SafeAreaView style={styles.iOSContainerStyle} {...containerProps}>
            {children}
          </SafeAreaView>
        </VisibilityToggle>
      </VisibilityToggle>
      <VisibilityToggle visible={Platform.OS === 'android'}>
        <View style={styles.androidContainerStyle} {...containerProps}>
          {children}
        </View>
      </VisibilityToggle>
    </Fragment>
  );
}

export default Container;
