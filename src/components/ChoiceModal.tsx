import { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	WithTimingConfig,
} from 'react-native-reanimated';
import theme from '../app/theme';
import Button from './Button';

const { width, height } = Dimensions.get('window');

const MODAL_WIDTH = width;
const MODAL_HEIGHT = height * 0.2;
const DURATION = 400;
const OVERLAY_INIT_COLOR = theme.colors.transparent;
const OVERLAT_FINAL_COLOR = theme.colors.transparentGrey;

export interface ChoiceModalProps {
	text: string;
	onAccept: () => void;
	onReject: () => void;
}

export default function ({ text, onAccept, onReject }: ChoiceModalProps) {
	const withTimingConfig: WithTimingConfig = {
		duration: DURATION,
	};

	const y = useSharedValue(MODAL_HEIGHT);

	const containerAnimatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: y.value }],
	}));

	const overlayAnimatedStyle = useAnimatedStyle(() => ({
		backgroundColor: interpolateColor(
			y.value,
			[MODAL_HEIGHT, -MODAL_HEIGHT],
			[OVERLAY_INIT_COLOR, OVERLAT_FINAL_COLOR],
			'RGB'
		),
	}));

	useEffect(() => {
		y.value = withTiming(-MODAL_HEIGHT, withTimingConfig);
	}, []);

	const handlePress = (func: () => void) => {
		hideModal();
		setTimeout(func, DURATION);
	};

	const hideModal = () => {
		y.value = withTiming(MODAL_HEIGHT, withTimingConfig);
	};

	return (
		<Animated.View style={[styles.overlay, overlayAnimatedStyle]}>
			<Animated.View
				style={[styles.modalContainer, containerAnimatedStyle]}>
				<Animated.Text style={styles.text}>{text}</Animated.Text>
				<View style={styles.buttonsContainer}>
					<Button
						type='primary'
						onPress={() => handlePress(onAccept)}>
						Да
					</Button>
					<Button
						type='secondary'
						onPress={() => handlePress(onReject)}>
						Нет
					</Button>
				</View>
			</Animated.View>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		width,
		height,
		position: 'absolute',
		backgroundColor: theme.colors.transparentGrey,
	},
	modalContainer: {
		width: MODAL_WIDTH,
		height: MODAL_HEIGHT,
		alignSelf: 'center',
		padding: theme.paddings.xs,
		position: 'absolute',
		bottom: -MODAL_HEIGHT,
		left: 0,
		right: 0,

		backgroundColor: theme.colors.white,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	text: {
		textAlignVertical: 'center',
		color: theme.colors.dark,
		letterSpacing: theme.letterSpacing.m,
		textAlign: 'center',
		fontSize: 15,
		flex: 0.3,
	},
	buttonsContainer: {
		flex: 0.7,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});
