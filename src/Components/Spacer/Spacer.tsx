import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

type SpacerProps = {
  size?: number;
  horizontal?: boolean;
  backgroundColor?: string;
};

function Spacer({size, horizontal, backgroundColor}: SpacerProps) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        spacerStyle: {
          [horizontal ? 'width' : 'height']: size === undefined ? 10 : size,
          backgroundColor: backgroundColor || 'transparent',
        },
      }),
    [horizontal, size, backgroundColor],
  );

  return <View style={styles.spacerStyle} />;
}

export default Spacer;
