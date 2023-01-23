import { Feather as Icon } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Pressable, StyleProp, StyleSheet, TextInput as RNTextInput, TextInputProps, View, ViewStyle } from 'react-native';
import theme from '../app/theme';
import ErrorField from "./ErrorField";


interface PasswordInputProps extends TextInputProps {
    error?: string,
    containerStyle?: StyleProp<ViewStyle>
}

const PasswordInput = ({
    error,
    style: outerStyle,
    containerStyle,
    ...rest
}: PasswordInputProps) => {
    //@ts-ignore
    const inputStyle = error ? {...styles.main, ...outerStyle, ...styles.incorrectMain} : {...styles.main, ...outerStyle};
    
    const [showPassword,setShowPassword] = useState(false);

    const handlePress = () => {
        setShowPassword(!showPassword);
    }

    const showIcon = showPassword ?
        <Icon name='eye-off' size={20} color={theme.colors.lightGrey} />
        :
        <Icon name='eye' size={20} color={theme.colors.lightGrey} />

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={inputStyle}>
                <RNTextInput
                    style={styles.input}
                    secureTextEntry={!showPassword}
                    {...rest} />
                <Pressable
                    style={styles.iconContainer}
                    onPress={handlePress}
                >
                    {showIcon}
                </Pressable>
            </View>
            <ErrorField error={error}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    input: {
        width: '80%',
        fontSize: 15,
        letterSpacing: theme.letterSpacing.s
    },
    iconContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    main: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.primary,
        padding: 8,
        backgroundColor: theme.colors.secondary,
    },
    incorrectMain: {
        borderColor: theme.colors.red,
        borderWidth: 1,
        backgroundColor: theme.colors.lightRed,
    }
})

export default PasswordInput;