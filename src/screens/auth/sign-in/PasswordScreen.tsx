import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import theme from '../../../app/theme';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import PasswordInput from '../../../components/PasswordInput';
import { AuthStackScreenProps } from '../../../navigation/types';

const PasswordScreen = ({
	navigation,
	route,
}: AuthStackScreenProps<'Password'>) => {
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const disabled = password.trim() === '';

	const handleOnChangeText = (text: string) => {
		setError('');
		setPassword(text);
	};

	const handleForgotPasswordPress = () => {
		alert('forgot password');
	};

	const handleSubmit = () => {
		setTimeout(() => {
			setError(
				'Неверный пароль, проверьте введенный данные и повторите попытку'
			);
		}, 1000);
	};

	return (
		<Container>
			<View style={styles.header}>
				<Header arrowType='back' backArrowOnPress={navigation.goBack} />
			</View>
			<View style={styles.main}>
				<Text style={styles.title}>Введите пароль</Text>
				<View style={styles.descriptionContainer}>
					<Text style={styles.description}>
						Укажите пароль, привязанный к номеру
					</Text>
					<Text style={styles.tel}>{route.params.tel}</Text>
				</View>
				<PasswordInput
					placeholder='Пароль'
					value={password}
					onChangeText={handleOnChangeText}
					error={error}
					containerStyle={{ marginBottom: theme.margins.xs }}
				/>
				<TouchableWithoutFeedback
					style={styles.forgotPasswordButton}
					onPress={handleForgotPasswordPress}
				>
					<Text style={styles.forgotPasswordText}>
						Забыли пароль?
					</Text>
				</TouchableWithoutFeedback>
			</View>
			<View style={styles.footer}>
				<Button disabled={disabled} onPress={handleSubmit} style={{marginBottom: theme.margins.s}}>
					Продолжить
				</Button>
			</View>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
	},
	header: {
		flex: 0.1,
	},
	main: {
		flex: 0.3,
		alignItems: 'center',
	},
	input: {
		backgroundColor: theme.colors.secondary,
		borderColor: theme.colors.primary,
		marginBottom: theme.margins.s,
	},
	title: {
		fontWeight: '500',
		fontSize: 20,
		marginBottom: theme.margins.m,
	},
	descriptionContainer: {
		alignItems: 'center',
		marginBottom: theme.margins.l,
	},
	description: {
		color: theme.colors.grey,
		letterSpacing: theme.letterSpacing.m,
	},
	tel: {
		letterSpacing: theme.letterSpacing.l,
	},
	forgotPasswordButton: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: 'black',
	},
	forgotPasswordText: {
		alignSelf: 'flex-start',
		letterSpacing: theme.letterSpacing.s,
	},
	footer: {
		flex: 0.7,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
});

export default PasswordScreen;
