import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../../../app/theme';
import Button from '../../../../components/Button';
import SmsCountDownField from './SmsCountDownField';

export interface RepeatSmsButtonProps {

}

const RepeatSmsButton = ({

}: RepeatSmsButtonProps) => {
    const SMS_TIMEOUT = 60;

    const [timeOut, setTimeOut] = useState(false);

    const handleTimeIsUp = () => {
        setTimeOut(true);
    }

    const handleRepeateButtonOnPress = () => {
        setTimeOut(false);
    }

    if (!timeOut) {
        return <SmsCountDownField timeoutTime={SMS_TIMEOUT} onTimeIsUp={handleTimeIsUp} />
    }

    return (
        <Button
            style={styles.repeatButton}
            type='secondary'
            onPress={handleRepeateButtonOnPress}
        >
            Повторить ещё раз
        </Button>
    )
}

const styles = StyleSheet.create({
    repeatButton: {
        marginBottom: theme.margins.s,
    }
})

export default RepeatSmsButton;