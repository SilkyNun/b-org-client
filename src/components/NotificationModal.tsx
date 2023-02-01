import Constants from 'expo-constants';
import { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import theme from '../app/theme';

const { width, height } = Dimensions.get('window');

const MODAL_WIDTH = width;
const MODAL_HEIGHT = height * 0.12;
const DURATION = 400;
const INIT_TEXT_OPACITY = 0;
const FINAL_TEXT_OPACITY = 1;

export interface NotificationModalProps {
	ttl: number;
	text: string;
	onShowEnd: () => void;
}

export default function ({ ttl, onShowEnd, text }: NotificationModalProps) {
	const y = useSharedValue(-MODAL_HEIGHT);

	const containerAnimatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: y.value }],
	}));

	const textAnimatedStyle = useAnimatedStyle(() => ({
		opacity: interpolate(
			y.value,
			[MODAL_HEIGHT - Constants.statusBarHeight, MODAL_HEIGHT],
			[INIT_TEXT_OPACITY, FINAL_TEXT_OPACITY]
		),
	}));

	useEffect(() => {
		y.value = withTiming(MODAL_HEIGHT, {
			duration: DURATION,
		});

		setTimeout(() => {
			y.value = withTiming(-MODAL_HEIGHT, {
				duration: DURATION,
			});
			setTimeout(onShowEnd, DURATION);
		}, ttl);
	}, []);

	return (
		<Animated.View style={[styles.container, containerAnimatedStyle]}>
			<Animated.Text style={[styles.text, textAnimatedStyle]}>
				{text}
			</Animated.Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: MODAL_WIDTH,
		height: MODAL_HEIGHT,
		position: 'absolute',
		top: -MODAL_HEIGHT,
		left: 0,
		right: 0,

		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.paddings.l,
		paddingTop: Constants.statusBarHeight,

		backgroundColor: theme.colors.white,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,

		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 10,
	},
	text: {
		color: theme.colors.dark,
		letterSpacing: theme.letterSpacing.m,
		textAlign: 'center',
		fontSize: 15,
	},
});
