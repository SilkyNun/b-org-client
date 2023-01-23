import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import theme from '../app/theme';
import TextInput, { TextInputProps } from './TextInput';

const ATextInput = Animated.createAnimatedComponent(TextInput);

export interface AnimatedTextInputProps extends TextInputProps {

}

const AnimatedTextInput = ({
    style: outerStyle,
    ...rest
}: AnimatedTextInputProps) => {
    const DEFAULT_BORDER_COLOR = theme.colors.lightGrey;
    const CHANGE_BORDER_COLOR = theme.colors.primary;

    const color = useSharedValue(DEFAULT_BORDER_COLOR);
    const inputStyle = useAnimatedStyle(() => ({
        borderColor: color.value
    }));

    const handleOnFocus = () => {
        color.value = withTiming(CHANGE_BORDER_COLOR,{
            duration: 0
        })
    }

    const handleOnBlur = () => {
        color.value = withTiming(DEFAULT_BORDER_COLOR, {
            duration: 0
        })
    }

    return (
        <ATextInput
            style={[outerStyle, inputStyle]}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            {...rest} />
    )
}

const styles = StyleSheet.create({

})

export default AnimatedTextInput;