import { StyleSheet, Text, View, ViewProps } from "react-native";
import theme from "../app/theme";

interface ErrorFieldProps extends ViewProps {
    error?: string
}

const ErrorField = ({
    error,
    style: outerStyle,
    ...rest
}: ErrorFieldProps) => {
    if (!error) {
        return null;
    }

    return (
        <View 
            style={[styles.errorFieldContainer, outerStyle]}
            {...rest}
        >
            <Text style={styles.errorFieldText}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorFieldContainer: {
        width: '100%'
    },
    errorFieldText: {
        textAlign: 'left',
        color: theme.colors.red,
        fontSize: 12,
        letterSpacing: theme.letterSpacing.m
    }
});

export default ErrorField;