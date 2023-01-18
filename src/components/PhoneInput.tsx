import { Feather as Icon } from "@expo/vector-icons"
import React from 'react'
import { Pressable, StyleSheet, Text, TextInputProps, View } from 'react-native'
import MaskInput from 'react-native-mask-input'
import theme from '../app/theme'
import ErrorField from "./ErrorField"

interface PhoneInputProps extends TextInputProps {
    phoneCode: string,
    error?: string
}

const PhoneInput = ({
    value,
    onChangeText,
    phoneCode,
    error,
    ...rest
}: PhoneInputProps) => {
    const PHONE_MASK = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

    const clearInput = () => {
        if (onChangeText) {
            onChangeText('');
        }
    }

    const handleOnChangeText = (masked: string, unmasked: string) => {
        if (onChangeText) {
            onChangeText(unmasked);
        }
    }

    const icon = value ? <Icon name='x' size={24} color={theme.colors.lightGrey} /> : null;
    const mainStyle = error ? { ...styles.main, ...styles.error } : styles.main;

    return (
        <View>
            <View style={mainStyle}>
                <View style={styles.codeContainer}>
                    <Text style={styles.code}>
                        {phoneCode}
                    </Text>
                </View>
                <MaskInput
                    style={styles.input}
                    placeholder='Номер телефона'
                    keyboardType='decimal-pad'
                    value={value}
                    onChangeText={handleOnChangeText}
                    mask={PHONE_MASK}
                />
                <Pressable
                    style={styles.iconContainer}
                    onPress={clearInput}
                >
                    {icon}
                </Pressable>
            </View>
            <ErrorField error={error}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.primary,
        padding: 8,
        backgroundColor: theme.colors.secondary,
        marginBottom: theme.margins.xs
    },
    codeContainer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.8,
        borderRightColor: 'rgba(0,0,0,0.2)',
        paddingRight: 8
    },
    code: {
        fontSize: theme.fontSize.m
    },
    input: {
        flex: 0.75,
        paddingLeft: theme.paddings.m,
        fontSize: theme.fontSize.m
    },
    iconContainer: {
        flex: 0.1
    },
    error: {
        borderColor: theme.colors.red,
        borderWidth: 1,
        backgroundColor: theme.colors.lightRed,
    }
})

export default PhoneInput;