import React from 'react'
import { StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps, View } from 'react-native'
import theme from '../app/theme'
import ErrorField from './ErrorField'

interface TextInputProps extends RNTextInputProps {
    error?: string
}

const TextInput = ({
    error,
    style: outerStyles,
    ...rest
}: TextInputProps) => {
    //@ts-ignore
    const inputStylesCorrect = {...styles.input, ...outerStyles};
    const inputStylesError = {...inputStylesCorrect, ...styles.error};
    const inputStyle = error ? inputStylesError : inputStylesCorrect;

    return (
        <View style={styles.container}>
            <RNTextInput style={inputStyle} {...rest}/>
            <ErrorField error={error} style={styles.errorField}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.primary,
        padding: 8,
        backgroundColor: theme.colors.secondary,
        marginBottom: theme.margins.xs,

        color: theme.colors.grey,
        letterSpacing: theme.letterSpacing.s,
        fontSize: 16
    },
    error: {
        borderColor: theme.colors.red,
        borderWidth: 1,
        backgroundColor: theme.colors.lightRed,
    },
    errorField: {
        alignItems :'center'
    }
})

export default TextInput;