import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../../app/theme';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Description from '../../../components/Description';
import Header from '../../../components/Header';
import PhoneInput from '../../../components/PhoneInput';
import Title from '../../../components/Title';
import { AuthStackScreenProps } from '../../../navigation/types';

const PhoneScreen = ({ navigation, route }: AuthStackScreenProps<'Phone'>) => {
	const PHONE_CODE = '+375';
	const PHONE_LENGTH = 9;

	const [phone, setPhone] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = () => {
		setError('Неверно указан номер. Пожалуйста, повторите попытку');
		navigation.navigate('SMS', {tel: PHONE_CODE + phone});
	};

	const handleOnChangeText = (text: string) => {
		setError('');
		setPhone(text);
	};

	const handleDisabled = phone.length !== PHONE_LENGTH;

	return (
		<Container>
			<View style={styles.header}>
				<Header arrowType='back' backArrowOnPress={navigation.goBack} />
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
					onPress={handleSubmit}
					disabled={handleDisabled}
					style={{ marginBottom: theme.margins.s }}
				>
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
	footer: {
		flex: 0.7,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
});

export default PhoneScreen;
