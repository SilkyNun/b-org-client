import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../app/theme'
import Button from '../../components/Button'
import Description from '../../components/Description'
import Header from '../../components/Header'
import PhoneInput from '../../components/PhoneInput'
import Title from '../../components/Title'

interface PhoneFormProps {

}

const PhoneForm = ({

}: PhoneFormProps) => {
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
                <Title style={{ marginBottom: theme.margins.m }}>
                    Введите номер
                </Title>
                <Description style={{ marginBottom: theme.margins.l }}>
                    Ваш номер телефона будет использоваться для входа в аккаунт
                </Description>
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
    footer: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})

export default PhoneForm;