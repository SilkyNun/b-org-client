import { Feather as Icon } from "@expo/vector-icons";
import React from 'react';
import { Pressable, StyleSheet, TextInput as RNTextInput, TextInputProps, View } from 'react-native';
import theme from '../app/theme';
import ErrorField from "./ErrorField";


interface PasswordInputProps extends TextInputProps {
    showPassword: boolean,
    setShowPassword: (_: boolean) => void
}

const PasswordInput = ({
    showPassword,
    setShowPassword,
    ...rest
}: PasswordInputProps) => {
    const handlePress = () => {
        setShowPassword(!showPassword);
    }

    const showIcon = showPassword === true ?
        <Icon name='eye-off' size={20} color={theme.colors.lightGrey} />
        :
        <Icon name='eye' size={20} color={theme.colors.lightGrey} />

    return (
        <View style={styles.container}>
            <View style={styles.main}>
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
            <ErrorField error="Неверный пароль, проверьте правильность введенных данных"/>
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
        marginBottom: theme.margins.xs
    }
})

export default PasswordInput;