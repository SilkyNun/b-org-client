import { Feather as Icon } from "@expo/vector-icons";
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from '../app/theme';

const appIcon = require('./../../assets/app-icon.png');

interface HeaderProps {
    arrowType?: 'back' | 'next' | 'both' | 'none'
    backArrowOnPress?: () => void
    nextArrowOnPress?: () => void
}

const Header = ({
    arrowType,
    backArrowOnPress,
    nextArrowOnPress
}: HeaderProps) => {
    const backArrow = arrowType === 'back' || arrowType === 'both' ?
        (
            <TouchableOpacity onPress={backArrowOnPress}>
                <Icon name='arrow-left' size={24} color={theme.colors.primary} />
            </TouchableOpacity>
        )
        : null;
    const nextArrow = arrowType === 'next' || arrowType === 'both' ?
        (
            <TouchableOpacity onPress={nextArrowOnPress}>
                <Icon name='arrow-right' size={24} color={theme.colors.primary} />
            </TouchableOpacity>
        )
        : null;

    return (
        <View style={styles.container}>
            <View style={styles.arrowContainer}>
                {backArrow}
            </View>
            <View style={styles.logoContainer}>
                <Image source={appIcon} style={styles.icon} />
            </View>
            <View style={styles.arrowContainer}>
                {nextArrow}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowContainer: {
        flex: 0.1,
    },
    logoContainer: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 30,
        height: 30
    }
})

export default Header;