import { Text, TouchableOpacity, TouchableOpacityProps} from "react-native"
import theme from "../app/theme"

const Button = (props: {
    name: string,
} & TouchableOpacityProps) => {
    const {
        name,
        style,
        ...rest
    } = props

    return (
      <TouchableOpacity style={[{
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        padding: theme.paddings.m,
        width: '90%',
        margin: theme.margins.l,
      }, style]}
        activeOpacity={0.7}
        {...rest}
      >
        <Text style={{
          textAlign: 'center',
          color: theme.colors.white,
          fontWeight: '500'
        }}>
          {name}
        </Text>
      </TouchableOpacity>
    )
}

export default Button;