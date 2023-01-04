import { useFormik } from "formik";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import * as Yup from 'yup';
import theme from "../app/theme";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const { width: wWidth } = Dimensions.get('window');
const signInIcon = require('../../assets/sign-in-icon.png');

const SignInForm = () => {
  const signUpFormSchema = Yup.object().shape({
    telOrEmail: Yup.string()
      .required('Поле обязательно для заполнения')
      .matches(/(^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$|^\+375(29|33|44|25)\d{7}$)/, {
        message: 'Введите корректные данные'
      })
  })

  const formik = useFormik({
    initialValues: {
      telOrEmail: ''
    },
    onSubmit: (values) => console.log(values),
    validationSchema: signUpFormSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false
  });

  return (
    <React.Fragment>
      <TextInput
        placeholder="Телефон или почта"
        value={formik.values.telOrEmail}
        onChangeText={(text) => {
          if (formik.errors.telOrEmail) {
            formik.setErrors({telOrEmail: undefined});
          }
          formik.setValues({telOrEmail: text});
        }}
        error={formik.errors.telOrEmail}
        style={{
          borderColor: theme.colors.primary,
          backgroundColor: theme.colors.secondary
        }}
      />
      
      <Button name='Войти' onPress={() => formik.handleSubmit()} />
    </React.Fragment>
  )
}

const SignIn = () => {
  const [telOrEmail, setTelOrEmail] = useState('');
  const {
    icon: iconStyle,
    innerContainer: innerContainerStyle,
    outerContainer: outerContainerStyle,
    signUpButton: signUpButtonStyle,
    text: textStyle
  } = styles;

  return (
    <View style={styles.outerContainer}>
      <View style={[innerContainerStyle, {flex: 0.2}]}>

      </View>
      <View style={innerContainerStyle}>
        <Image source={signInIcon} style={iconStyle} />
        <Text style={textStyle}>Вход</Text>
        <SignInForm />
      </View>
      <View style={[innerContainerStyle, {justifyContent: 'flex-end'}]}>
        <Button name='Зарегистрироваться' style={signUpButtonStyle} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1
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

export default SignIn;