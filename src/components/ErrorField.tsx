import { StyleSheet, Text, View } from "react-native";
import theme from "../app/theme";

interface ErrorFieldProps {
    error?: string
}

const ErrorField = ({
    error
}: ErrorFieldProps) => {
    return error ? (
        <View style={styles.errorFieldContainer}>
            <Text style={styles.errorFieldText}>{error}</Text>
        </View>
    ) : null;
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