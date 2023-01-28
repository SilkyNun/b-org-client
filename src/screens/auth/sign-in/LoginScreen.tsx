import { useFormik } from 'formik';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import theme from '../../../app/theme';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import TextInput from '../../../components/TextInput';
import { AuthStackScreenProps } from '../../../navigation/types';

const appIcon = require('./../../../../assets/app-icon.png');
const { width: wWidth } = Dimensions.get('window');

const LoginScreen = ({ navigation, route }: AuthStackScreenProps<'Login'>) => {
	const TEL_REGEX = /^\+375(29|33|44|25)\d{7}$/;
	const INPUT_PLACEHOLDER = 'Телефон';
	const SCHEMA = Yup.object().shape({
		tel: Yup.string()
			.required('Поле обязательно для заполнения')
			.matches(TEL_REGEX, {
				message: 'Введите корректные данные',
			}),
	});

	const handleSubmit = () => {
		navigation.navigate('Password', { tel: formik.values.tel });
	};

	const handleChangeText = (text: string) => {
		if (formik.errors.tel) {
			formik.setErrors({ tel: undefined });
		}
		formik.setValues({ tel: text });
	};

	const formik = useFormik({
		initialValues: {
			tel: '',
		},
		onSubmit: handleSubmit,
		validationSchema: null,
		validateOnBlur: false,
		validateOnChange: false,
		validateOnMount: false,
	});

	return (
		<Container>
			<View style={[styles.innerContainer, { flex: 0.2 }]}></View>
			<View style={styles.innerContainer}>
				<Image source={appIcon} style={styles.icon} />
				<Text style={styles.text}>Вход</Text>
				<TextInput
					placeholder={INPUT_PLACEHOLDER}
					value={formik.values.tel}
					onChangeText={handleChangeText}
					error={formik.errors.tel}
					containerStyle={{ marginBottom: theme.margins.s }}
				/>
				<Button onPress={() => formik.handleSubmit()}>Войти</Button>
			</View>
			<View
				style={[styles.innerContainer, { justifyContent: 'flex-end' }]}
			>
				<Button
					style={styles.signUpButton}
					onPress={() => navigation.navigate('Phone')}
				>
					Зарегистрироваться
				</Button>
			</View>
		</Container>
	);
};

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
	},
	innerContainer: {
		flex: 0.4,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	icon: {
		width: 50,
		height: 50,
		marginBottom: theme.margins.s,
	},
	text: {
		fontSize: 22,
		fontWeight: '500',
		marginBottom: theme.margins.xl,
	},
	signUpButton: {
		backgroundColor: theme.colors.red,
		marginBottom: theme.margins.s,
	},
});

export default LoginScreen;
