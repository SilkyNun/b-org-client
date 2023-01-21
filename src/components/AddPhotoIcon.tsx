import { Feather as Icon } from "@expo/vector-icons"
import React, { useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import theme from '../app/theme'

export interface AddPhotoIconProps {

}

const AddPhotoIcon = ({

}: AddPhotoIconProps) => {
    const SCALE_INDEX = 0.8;

    const viewRef = useRef<View>(null);
    const scale = useSharedValue(1)

    const handleTouchStart = () => {
        scale.value = withTiming(scale.value * SCALE_INDEX, {
            duration: 200
        });
    }

    const handleTouchEnd = () => {
        scale.value = withTiming(scale.value / SCALE_INDEX, {
            duration: 200
        });
    }

    const animatedViewStyle = useAnimatedStyle(() => ({
        transform: [
            {scale: scale.value}
        ]
    }))

    return (
        <Animated.View style={[styles.container, animatedViewStyle]} ref={() => viewRef.current?.focus()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            <Icon name='camera' size={30} color={theme.colors.primary} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: theme.colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center'    
    }
})

export default AddPhotoIcon;