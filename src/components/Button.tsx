import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import theme from "../app/theme"

interface ButtonProps extends TouchableOpacityProps {
  name: string,
  disabled?: boolean
}

const Button = ({
  name,
  style,
  disabled,
  ...rest
}: ButtonProps) => {

  return (
    <TouchableOpacity
      style={[styles.container, style, {
        opacity: disabled ? 0.5 : 1
      }]}
      activeOpacity={0.7}
      disabled={disabled}
      {...rest}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: theme.paddings.m,
    width: '100%',
    margin: theme.margins.l,
  },
  text: {
    textAlign: 'center',
    color: theme.colors.white,
    fontWeight: '500'
  }
})

export default Button;