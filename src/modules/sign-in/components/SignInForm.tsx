import { useFormik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import theme from '../../../app/theme';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';


const SignInForm = () => {
    const telRegex = /^\+375(29|33|44|25)\d{7}$/;
    const signUpFormSchema = Yup
        .object()
        .shape({
            tel: Yup
                .string()
                .required('Поле обязательно для заполнения')
                .matches(telRegex, {
                    message: 'Введите корректные данные'
                })
        })
    const formik = useFormik({
        initialValues: {
            tel: ''
        },
        onSubmit: (values) => console.log(values),
        validationSchema: signUpFormSchema,
        validateOnBlur: false,
        validateOnChange: false,
        validateOnMount: false
    });

    const handleOnChangeText = (text: string) => {
        if (formik.errors.tel) {
            formik.setErrors({ tel: undefined });
        }
        formik.setValues({ tel: text });
    }

    return (
        <>
            <TextInput
                placeholder="Телефон или почта"
                value={formik.values.tel}
                onChangeText={handleOnChangeText}
                error={formik.errors.tel}
                style={styles.input}
            />
            <Button name='Войти' onPress={() => formik.handleSubmit()} />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.secondary
    }
})

export default SignInForm;