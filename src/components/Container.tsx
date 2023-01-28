import Constants from 'expo-constants';
import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export interface ContainerProps extends ViewProps {
	children?: ReactElement | ReactElement[] | never[];
}

const Container = ({
	children,
	style: outerStyle,
	...rest
}: ContainerProps) => {
	return (
		<View style={[styles.container, outerStyle]} {...rest}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
		marginTop: Constants.statusBarHeight,
	},
});

export default Container;
