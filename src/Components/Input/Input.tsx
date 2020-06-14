import React, {Fragment, useState} from 'react';
import {
  TextInput,
  IconButton,
  useTheme,
  TouchableRipple,
} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';
import {LayoutChangeEvent, Image, View} from 'react-native';

function Input(props: TextInputProps | any) {
  const Theme = useTheme();
  const [inputHeight, setInputHeight] = useState(0);
  const [iconLeftWidth, setIconLeftWidth] = useState(0);
  const [iconRightWidth, setIconRightWidth] = useState(0);

  const {
    leftComponent,
    rightComponent,
    leftOnPress,
    rightOnPress,
    leftImage,
    leftIcon,
    rightImage,
    rightIcon,
    leftImageSize,
    rightImageSize,
    leftIconColor,
    rightIconColor,
    error,
    style,
    leftStyle,
    rightStyle,
  } = props;

  return (
    <Fragment>
      {leftComponent && (
        <View
          style={{
            position: 'absolute',
            left: -5,
            height: inputHeight,
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            ...leftStyle,
          }}
          onLayout={(event: LayoutChangeEvent) =>
            setIconLeftWidth(event.nativeEvent.layout.width)
          }>
          {leftComponent}
        </View>
      )}
      {leftImage && (
        <TouchableRipple
          onPress={leftOnPress}
          rippleColor={'transparent'}
          style={{
            position: 'absolute',
            left: 8,
            height: inputHeight,
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            ...leftStyle,
          }}
          onLayout={(event: LayoutChangeEvent) =>
            setIconLeftWidth(event.nativeEvent.layout.width)
          }
          accessibilityStates>
          <Image
            source={leftImage}
            style={{
              borderRadius: 0,
              height: leftImageSize || 20,
              width: leftImageSize || 20,
            }}
            resizeMode={'contain'}></Image>
        </TouchableRipple>
      )}
      {leftIcon && (
        <IconButton
          style={{
            position: 'absolute',
            left: -5,
            height: inputHeight,
            zIndex: 1,
            ...leftStyle,
          }}
          color={
            error ? Theme.colors.error : leftIconColor || Theme.colors.primary
          }
          icon={leftIcon}
          onPress={leftOnPress}
          rippleColor={'transparent'}
          onLayout={(event: LayoutChangeEvent) =>
            setIconLeftWidth(event.nativeEvent.layout.width)
          }
          accessibilityStates></IconButton>
      )}
      <TextInput
        {...props}
        style={{
          ...style,
          backgroundColor: Theme.colors.background,
          paddingLeft: iconLeftWidth + 5,
          paddingRight: iconRightWidth + 5,
        }}
        onLayout={(event: LayoutChangeEvent) =>
          setInputHeight(event.nativeEvent.layout.height)
        }
        mode={'flat'}
      />
      {rightIcon && (
        <IconButton
          style={{
            position: 'absolute',
            right: -5,
            height: inputHeight,
            zIndex: 1,
            ...rightStyle,
          }}
          icon={rightIcon}
          onPress={rightOnPress}
          rippleColor={'transparent'}
          color={
            error ? Theme.colors.error : rightIconColor || Theme.colors.primary
          }
          onLayout={(event: LayoutChangeEvent) =>
            setIconRightWidth(event.nativeEvent.layout.width)
          }
          accessibilityStates></IconButton>
      )}
      {rightImage && (
        <TouchableRipple
          onPress={rightOnPress}
          rippleColor={'transparent'}
          style={{
            position: 'absolute',
            right: 8,
            height: inputHeight,
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            ...rightStyle,
          }}
          onLayout={(event: LayoutChangeEvent) =>
            setIconRightWidth(event.nativeEvent.layout.width)
          }
          accessibilityStates>
          <Image
            source={rightImage}
            style={{
              borderRadius: 0,
              height: rightImageSize || 20,
              width: rightImageSize || 20,
            }}
            resizeMode={'contain'}></Image>
        </TouchableRipple>
      )}
      {rightComponent && (
        <View
          style={{
            position: 'absolute',
            right: -5,
            height: inputHeight,
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            ...rightStyle,
          }}
          onLayout={(event: LayoutChangeEvent) =>
            setIconRightWidth(event.nativeEvent.layout.width)
          }>
          {rightComponent}
        </View>
      )}
    </Fragment>
  );
}

export default Input;
