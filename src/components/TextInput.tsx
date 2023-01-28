import { Feather as Icon } from '@expo/vector-icons';
import React from 'react';
import {
	StyleProp,
	StyleSheet,
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import theme from '../app/theme';
import ErrorField from './ErrorField';

export interface TextInputProps extends RNTextInputProps {
	error?: string;
	style?: StyleProp<ViewStyle>;
	containerStyle?: StyleProp<ViewStyle>;
	errorFieldStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<RNTextInputProps>
}

class TextInput extends React.Component<TextInputProps> {
	render(): React.ReactNode {
		const {
			error,
			value,
			onChangeText,
			style: outerStyles,
			containerStyle,
			errorFieldStyle,
			textStyle,
			...rest
		} = this.props;

		const isEmpty = value === '';
		//@ts-ignore
		const inputContainerStylesCorrect = {
			...styles.inputContainer,
			...outerStyles,
		};
		const inputContainerStylesError = {
			...inputContainerStylesCorrect,
			...styles.error,
		};
		const inputContainerStyle = error
			? inputContainerStylesError
			: inputContainerStylesCorrect;

		const resetInput = () => {
			if (onChangeText) {
				onChangeText('');
			}
		};

		return (
			<View style={[styles.container, containerStyle]}>
				<View style={inputContainerStyle}>
					<RNTextInput
						style={[styles.input, textStyle]}
						value={value}
						onChangeText={onChangeText}
						{...rest}
					/>
					<TouchableOpacity style={styles.iconContainer}>
						{!isEmpty && (
							<Icon
								name='x'
								size={19}
								color={theme.colors.lightGrey}
								onPress={resetInput}
							/>
						)}
					</TouchableOpacity>
				</View>
				<ErrorField error={error} style={errorFieldStyle} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: theme.colors.secondary,
		color: theme.colors.grey,
		borderRadius: 8,
		borderColor: theme.colors.primary,
		borderWidth: 1,
		padding: 8,
	},
	input: {
		flex: 0.9,
		letterSpacing: theme.letterSpacing.s,
		fontSize: 16,
	},
	error: {
		borderColor: theme.colors.red,
		borderWidth: 1,
		backgroundColor: theme.colors.lightRed,
	},
	iconContainer: {
		flex: 0.1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default TextInput;
