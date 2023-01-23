import React, { Component, memo } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Feather as Icon } from "@expo/vector-icons"
import theme from '../app/theme';

export interface PhotoIconProps extends ViewProps {

}

class PhotoIcon extends Component<PhotoIconProps> {

    render() {
        console.log('render');
        const {
            style: outerStyle,
            ...rest
        } = this.props;

        return (
            <View style={[styles.container, outerStyle]} {...rest}>
                <Icon name='camera' size={30} color={theme.colors.primary} />
            </View>
        )
    }
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

export default PhotoIcon