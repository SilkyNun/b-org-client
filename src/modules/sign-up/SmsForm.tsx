import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../app/theme'
import Button from '../../components/Button'
import Description from '../../components/Description'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import Title from '../../components/Title'
import SmsCountDownField from './components/SmsCountDownField'

interface SmsFormProps {
    tel: string
}

const SmsForm = ({
    tel,
}: SmsFormProps) => {
    const PLACEHOLDER_TEXT = 'Код из SMS';
    const REQUIRED_CODE_LENGTH = 6;
    const SMS_TIMEOUT = 60;

    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [timeOut, setTimeOut] = useState(false);

    const handleOnChangeText = (text: string) => {
        if (error) {
            setError('');
        }
        setCode(text);
    }

    const handleOnTimeIsUp = () => {
        setTimeOut(true);
    }

    const handleDisabled = () => {
        return code.length !== REQUIRED_CODE_LENGTH;
    }

    const handleRepeateButtonOnPress = () => {
        setTimeOut(false);
    }

    const handleSubmit = () => {
        console.log({code});
        setError('Неверный код')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header arrowType='back' />
            </View>
            <View style={styles.main}>
                <Title style={styles.title}>
                    Подтвердите номер
                </Title>
                <Description>
                    Мы отправили SMS с кодом на номер
                </Description>
                <Description style={styles.tel}>
                    {tel}
                </Description>
                <TextInput
                    placeholder={PLACEHOLDER_TEXT}
                    style={styles.input}
                    keyboardType='decimal-pad'
                    maxLength={10}

                    value={code}
                    onChangeText={handleOnChangeText}
                    error={error}
                />
            </View>
            <View style={styles.footer}>
                <Button
                    style={styles.continueButton}
                    type='primary'
                    disabled={handleDisabled()}
                    onPress={handleSubmit}
                >
                    Продолжить
                </Button>
                {
                    timeOut ? (
                        <Button
                            style={styles.repeatButton}
                            type='secondary'
                            onPress={handleRepeateButtonOnPress}
                        >
                            Повторить ещё раз
                        </Button>
                    ) : (
                        <SmsCountDownField timeoutTime={SMS_TIMEOUT} onTimeIsUp={handleOnTimeIsUp} />
                    )
                }

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
    },
    input: {
        width: '65%',
        textAlign: 'center'
    },
    tel: {
        marginBottom: theme.margins.l,
        color: theme.colors.dark
    },
    title: {
        marginBottom: theme.margins.s
    },
    continueButton: {
        marginBottom: theme.margins.s
    },
    repeatButton: {
        marginBottom: theme.margins.s,
    }
})

export default SmsForm;