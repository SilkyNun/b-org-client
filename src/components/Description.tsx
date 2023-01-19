import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import theme from '../app/theme'

interface DescriptionProps extends TextProps {
    children: string | never[]
}

const Description = ({
    children,
    style: outerStyles,
    ...rest
}: DescriptionProps) => {
    return (
        <Text
            style={[styles.text, outerStyles]}
            {...rest}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: theme.colors.grey,
        letterSpacing: theme.letterSpacing.m,
        textAlign: 'center',
        fontSize: 16
    }
})

export default Description;