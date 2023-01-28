import React, { memo } from "react";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	WithTimingConfig,
} from "react-native-reanimated";
import theme from "../app/theme";
import PhotoIcon from "./PhotoIcon";

const APhotoIcon = Animated.createAnimatedComponent(PhotoIcon);

export interface AnimatedPhotoIconProps {}

const AnimatedPhotoIcon = ({}: AnimatedPhotoIconProps) => {
	const DEFAULT_SCALE = 1;
	const CHANGE_SCALE = 0.95;
	const DEFAULT_COLOR = theme.colors.lightGrey;
	const CHANGE_COLOR = theme.colors.primary;

	const config: WithTimingConfig = {
		duration: 0,
	};

	const scale = useSharedValue(DEFAULT_SCALE);
	const borderColor = useSharedValue(DEFAULT_COLOR);

	const handleTouchStart = () => {
		scale.value = withTiming(CHANGE_SCALE, config);
		borderColor.value = withTiming(CHANGE_COLOR, config);
	};

	const handleTouchEnd = () => {
		scale.value = withTiming(DEFAULT_SCALE, config);
		borderColor.value = withTiming(DEFAULT_COLOR, config);
	};

	const animatedViewStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
		borderColor: borderColor.value,
	}));

	return (
		<APhotoIcon
			style={animatedViewStyle}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		/>
	);
};

export default memo(AnimatedPhotoIcon);
