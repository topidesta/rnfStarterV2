import React, {useMemo} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

type RowProps = {
  children?: any;
  style?: ViewStyle;
  flex?: number;
};

function Row({children, style, flex}: RowProps) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        rowStyles: {
          flexDirection: 'row',
          flex: flex === undefined ? 0 : flex,
          ...style,
        },
      }),
    [flex, style],
  );

  return <View style={styles.rowStyles}>{children}</View>;
}

export default Row;
