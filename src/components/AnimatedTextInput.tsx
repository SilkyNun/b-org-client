import { Feather as Icon } from "@expo/vector-icons";
import { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput as RNTextInput, TextInputProps, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import theme from "../app/theme";

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedText = Animated.createAnimatedComponent(Text);
const { width: wWidth } = Dimensions.get("window");

const INPUT_CONTEINER_WIDTH = wWidth * 0.9;
const INPUT_CONTEINER_HEIGHT = 45;
const INPUT_CONTEINER_PADDING = 8;
const LABEL_HEIGHT = 20;
const LABEL_MARGIN_BOTTOM = 8 / 2;
const LABEL_TRANSLATE_Y =
    INPUT_CONTEINER_HEIGHT / 4 + LABEL_HEIGHT + LABEL_MARGIN_BOTTOM;
const INPUT_ICON_SIZE = 24;

const config = {
    duration: 200,
};

const AnimatedTextInput = (props: {
    placeholder: string,
    value: string,
    onChangeText: (_: string) => void,
    error?: string
} & TextInputProps) => {

    const {
        placeholder,
        value,
        onChangeText,
        error,
        style,
        ...rest
    } = props;

    const [empty, setEmpty] = useState(true);
    const input = useRef<RNTextInput>(null);

    const translateY = useSharedValue(LABEL_TRANSLATE_Y);
    const translateX = useSharedValue(INPUT_CONTEINER_PADDING);
    const fontSize = useSharedValue(14);

    const handleFocus = () => {
        translateY.value = withTiming(0, config);
        translateX.value = withTiming(0, config);
        fontSize.value = withTiming(13, config);
    };

    const handleBlur = () => {
        if (!empty) return;

        translateY.value = withTiming(LABEL_TRANSLATE_Y, config);
        translateX.value = withTiming(INPUT_CONTEINER_PADDING, config);
        fontSize.value = withTiming(14, config);
    };

    const handleChangeText = (text: string) => {
        onChangeText(text);
        setEmpty(text === '');
    };

    const animatedLabelConteinerStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: translateY.value },
            { translateX: translateX.value },
        ],
    }));

    const animatedLabelTextStyle = useAnimatedStyle(() => ({
        fontSize: fontSize.value,
    }));

    const resetInput = () => {
        onChangeText('');
        setEmpty(true);
    }

    const ErrorField = () => {
        return error ? (
            <View style={styles.errorFieldContainer}>
                <Text style={styles.errorFieldText}>{error}</Text>
            </View>
        ) : null;
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => input.current?.focus()}>
                <View style={styles.outerContainer}>
                    <View style={[styles.innerContainer, style]}>
                        <RNTextInput
                            ref={input}
                            onChangeText={handleChangeText}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            style={styles.input}
                            value={value}
                        />
                        {!empty && (
                            <TouchableOpacity
                                onPress={resetInput}
                            >
                                <Icon
                                    name="x"
                                    size={INPUT_ICON_SIZE}
                                    color='grey'
                                />
                            </TouchableOpacity>
                        )}
                    </View>

                    <AnimatedView style={[animatedLabelConteinerStyle, {
                        height: LABEL_HEIGHT,
                        marginBottom: LABEL_MARGIN_BOTTOM
                    }]}>
                        <AnimatedText style={[animatedLabelTextStyle, {
                            textAlign: 'left',
                            color: 'grey'
                        }]}
                        >
                            {placeholder}
                        </AnimatedText>
                    </AnimatedView>
                </View>
            </TouchableWithoutFeedback>
            <ErrorField />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width:
            INPUT_CONTEINER_WIDTH - INPUT_ICON_SIZE - INPUT_CONTEINER_PADDING * 2,
    },
    outerContainer: {
        flexDirection: 'column-reverse',
        height: INPUT_CONTEINER_HEIGHT + LABEL_HEIGHT / 2
    },
    innerContainer: {
        width: INPUT_CONTEINER_WIDTH,
        height: INPUT_CONTEINER_HEIGHT,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'white'
    },
    incorrectInnerContainer: {
        borderColor: theme.colors.red,
        borderWidth: 1,
        backgroundColor: theme.colors.lightRed,
    },
    errorFieldText: {
        textAlign: 'left',
        color: theme.colors.red,
        fontSize: 12
    },
    errorFieldContainer: {
        width: INPUT_CONTEINER_WIDTH
    }
});

export default AnimatedTextInput;