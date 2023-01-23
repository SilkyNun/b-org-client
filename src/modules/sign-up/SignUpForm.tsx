import React, { useRef, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, TextInput as RNTextInput, ImageEditor } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import theme from '../../app/theme'
import AnimatedPhotoIcon from '../../components/AnimatedPhotoIcon'
import AnimatedTextInput from '../../components/AnimatedTextInput'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Header from '../../components/Header'
import PasswordInput from '../../components/PasswordInput'
import TextInput from '../../components/TextInput'
import Title from '../../components/Title'

export interface SignUpFormProps {

}

type StateConfig = {
    value: string,
    error: string
}

const SignUpForm = ({

}: SignUpFormProps) => {
    const INVALID_REPEAT_PASSWORD = 'Пароли не совпадают';

    const [name, setName] = useState<StateConfig>({value: '', error: ''});
    const [surname, setSurname] = useState<StateConfig>({value: '', error: ''});
    const [password, setPassword] = useState<StateConfig>({value: '', error: ''});
    const [repeatPassword, setRepeatPassword] = useState<StateConfig>({value: '', error: ''});

    const isButtonDisabled = Array.of(name, surname, password, repeatPassword)
        .filter(item => !item.value || item.error)
        .length !== 0;

    const handleChangeName = (value: string) => {
        setName({value, error: ''});
    }

    const handleChangeSurname = (value: string) => {
        setSurname({value, error: ''});
    }

    const handleChangePassword = (value: string) => {
        setPassword({value, error: ''});
    }

    const handleChangePasswordRepeat = (value: string) => {
        const error = password.value.localeCompare(value) ? INVALID_REPEAT_PASSWORD : '';
        setRepeatPassword({value, error});
    }

    const handleSubmit = () => {
        console.log({name}, {surname}, {password}, {repeatPassword});
    }

    return (
        <Container>
            <View style={styles.header}>
                <Header arrowType='back' />
            </View>
            <View style={styles.main}>
                <Title style={styles.title}>
                    Информация о себе
                </Title>
                <View style={styles.infoContainer}>
                    <View style={styles.iconContainer}>
                        <AnimatedPhotoIcon />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                            placeholder='Имя'
                            value={name.value}
                            error={name.error}
                            onChangeText={handleChangeName} />
                        <TextInput style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0}}
                            placeholder='Фамилия'
                            value={surname.value}
                            error={surname.error}
                            onChangeText={handleChangeSurname} />
                    </View>
                </View>
                <PasswordInput 
                    containerStyle={{marginBottom: theme.margins.l}}
                    placeholder='Пароль'
                    value={password.value}
                    error={password.error}
                    onChangeText={handleChangePassword}/>
                <PasswordInput
                    placeholder='Повторите пароль'
                    value={repeatPassword.value} 
                    error={repeatPassword.error}
                    onChangeText={handleChangePasswordRepeat}/>
            </View>
            <View style={styles.footer}>
                <Button
                    disabled={isButtonDisabled}
                    onPress={handleSubmit}>
                    Зарегистрироваться
                </Button>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    header: {
        flex: 0.1
    },
    main: {
        flex: 0.4,
        alignItems: 'center'
    },
    footer: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingBottom: theme.paddings.m
    },
    input: {
    },
    title: {
        marginBottom: theme.margins.l
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: theme.margins.l
    },
    iconContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        flex: 0.7
    }
})

export default SignUpForm;