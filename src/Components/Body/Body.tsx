import React, {useMemo} from 'react';
import {ScrollView, ViewStyle, ScrollViewProps, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

type BodyProps = {
  style?: ViewStyle;
  children?: any;
  bodyProps?: ScrollViewProps;
  backgroundColor?: string;
  transparent?: boolean;
};

function Body({
  style,
  children,
  bodyProps,
  backgroundColor,
  transparent,
}: BodyProps) {
  const Theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        bodyStyle: {
          flexGrow: 1,
          backgroundColor: transparent
            ? 'transparent'
            : backgroundColor || Theme.colors.surface,
          ...style,
        },
      }),
    [backgroundColor, Theme.colors.surface, style, transparent],
  );

  return useMemo(
    () => (
      <ScrollView
        contentContainerStyle={styles.bodyStyle}
        keyboardShouldPersistTaps={'handled'}
        {...bodyProps}>
        {children}
      </ScrollView>
    ),
    [children, bodyProps, styles],
  );
}

export default Body;
