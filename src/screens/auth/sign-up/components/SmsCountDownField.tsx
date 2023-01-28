import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import theme from '../../../../app/theme'
import Description, { DescriptionProps } from '../../../../components/Description'

export interface SmsCountDownFieldProps extends DescriptionProps {
    timeoutTime: number,
    onTimeIsUp: () => void
}

const SmsCountDownField = ({
    timeoutTime,
    onTimeIsUp,
    style: outerStyle,
    ...rest
}: SmsCountDownFieldProps) => {
    const [smsTimeout, setSmsTimeout] = useState(timeoutTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setSmsTimeout(prev => prev - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            onTimeIsUp();
        }, timeoutTime * 1000);
    },[])

    return (
        <Description style={[styles.expireField, outerStyle]} {...rest}>
            SMS придёт в течении {smsTimeout.toString()} секунд
        </Description>
    )
}

const styles = StyleSheet.create({
    expireField: {
        marginBottom: theme.margins.s,
        fontSize: 14,
        padding: theme.paddings.m
    }
})

export default SmsCountDownField;