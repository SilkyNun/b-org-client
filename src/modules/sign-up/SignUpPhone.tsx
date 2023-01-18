import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../../app/theme'
import Button from '../../components/Button'
import Header from '../../components/Header'
import PhoneInput from '../../components/PhoneInput'

interface SignUpPhoneProps {
    
}

const SignUpPhone = ({
    
}: SignUpPhoneProps) => {
    const PHONE_CODE = '+375';
    const PHONE_LENGTH = 9;

    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        console.log(PHONE_CODE + phone);
        setError('Неверно указан номер. Пожалуйста, повторите попытку');
    }

    const handleOnChangeText = (text: string) => {
        setError('');
        setPhone(text);
    }

    const handleDisabled = () => {
        return phone.length !== PHONE_LENGTH;
    }

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Header arrowType="back" />
        </View>
        <View style={styles.main}>
            <Text style={styles.title}>
                Введите номер
            </Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    Ваш номер телефона будет использоваться для входа в аккаунт
                </Text>
            </View>
            <PhoneInput
                phoneCode={PHONE_CODE}
                value={phone}
                onChangeText={handleOnChangeText}
                error={error}
            />
        </View>
        <View style={styles.footer}>
            <Button
                name="Продолжить"
                onPress={handleSubmit}
                disabled={handleDisabled()}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center'
    },
    header: {
        flex: 0.1,
    },
    main: {
        flex: 0.3,
        alignItems: 'center'
    },
    input: {
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.primary,
        marginBottom: theme.margins.s
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        marginBottom: theme.margins.m
    },
    descriptionContainer: {
        alignItems: 'center',
        marginBottom: theme.margins.l
    },
    description: {
        color: theme.colors.grey,
        letterSpacing: theme.letterSpacing.m,
        textAlign: 'center',
        fontSize: 16
    },
    tel: {
        letterSpacing: theme.letterSpacing.l
    },
    forgotPasswordButton: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
    },
    forgotPasswordText: {
        alignSelf: 'flex-start',
        letterSpacing: theme.letterSpacing.s
    },
    footer: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})

export default SignUpPhone;