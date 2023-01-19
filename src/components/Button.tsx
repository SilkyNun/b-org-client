import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import theme from "../app/theme";

interface ButtonProps extends TouchableOpacityProps {
  children: string | never[],
  disabled?: boolean,
  type?: 'primary' | 'secondary'
}

const Button = ({
  type = 'primary',
  children,
  style: outerStyle,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, outerStyle, {
        backgroundColor: type === 'primary' ? theme.colors.primary : theme.colors.white,
        opacity: disabled ? 0.5 : 1
      }]}
      activeOpacity={0.7}
      disabled={disabled}
      {...rest}
    >
      <Text
        style={[styles.text, {
          color: type === 'primary' ? theme.colors.white : theme.colors.primary
        }]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: theme.paddings.m,
    width: '100%'
  },
  text: {
    textAlign: 'center',
    color: theme.colors.white,
    fontWeight: '500'
  }
})

export default Button;