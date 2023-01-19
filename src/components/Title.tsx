import React from 'react'
import { StyleSheet, Text, TextProps, View } from 'react-native'
import theme from '../app/theme'

interface TitleProps extends TextProps {
    children: string | never[]
}

const Title = ({
    children,
    style: outerStyles,
    ...rest
}: TitleProps) => {
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
        fontWeight: '500',
        fontSize: 20,
    }
})

export default Title;