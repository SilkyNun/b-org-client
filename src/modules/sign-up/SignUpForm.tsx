import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../app/theme'
import AddPhotoIcon from '../../components/AddPhotoIcon'
import Container from '../../components/Container'
import Header from '../../components/Header'
import PasswordInput from '../../components/PasswordInput'
import TextInput from '../../components/TextInput'
import Title from '../../components/Title'

export interface SignUpFormProps {

}

const SignUpForm = ({

}: SignUpFormProps) => {
    return (
        <Container>
            <View style={styles.header}>
                <Header arrowType='back' />
            </View>
            <View style={styles.main}>
                <Title style={{ marginBottom: theme.margins.l }}>
                    Информация о себе
                </Title>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 0.35,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <AddPhotoIcon/>
                    </View>
                    <View style={{
                        flex: 0.65
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder='Имя'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Фамилия'
                        />
                    </View>
                </View>
                <PasswordInput
                    placeholder='Пароль'
                />
                <PasswordInput
                    placeholder='Повторите пароль'
                />
            </View>
            <View style={styles.footer}>

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
        flex: 0.5
    },
    input: {
        marginBottom: theme.margins.m
    }
})

export default SignUpForm;