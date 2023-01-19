import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import theme from "../../app/theme";
import Button from "../../components/Button";
import SignInForm from "./components/SignInForm";

const appIcon = require('./../../../assets/app-icon.png');
const { width: wWidth } = Dimensions.get('window');

const LoginForm = () => {
    const [tel, setTel] = useState('');

    return (
        <View style={styles.outerContainer}>
            <View style={[styles.innerContainer, { flex: 0.2 }]}>
            </View>
            <View style={styles.innerContainer}>
                <Image source={appIcon} style={styles.icon} />
                <Text style={styles.text}>Вход</Text>
                <SignInForm />
            </View>
            <View style={[styles.innerContainer, { justifyContent: 'flex-end' }]}>
                <Button style={styles.signUpButton}>
                    Зарегистрироваться
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        width: '90%',
        alignSelf: 'center'
    },
    innerContainer: {
        flex: 0.4,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: theme.margins.s
    },
    text: {
        fontSize: 22,
        fontWeight: '500',
        marginBottom: theme.margins.xl
    },
    signUpButton: {
        backgroundColor: theme.colors.red
    }
})

export default LoginForm;