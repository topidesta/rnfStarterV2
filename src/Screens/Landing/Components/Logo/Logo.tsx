import {Dimensions, Image, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';

import {logo} from 'src/Assets/Images';

const {width} = Dimensions.get('window');

function Logo() {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        logoStyle: {height: 200, width: width},
      }),
    [],
  );

  return (
    <Image source={logo} resizeMode={'contain'} style={styles.logoStyle} />
  );
}

export default Logo;
