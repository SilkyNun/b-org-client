import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "../app/theme";
import RootStack from "./RootStack";

export default function() {
    return (
        <NavigationContainer theme={Theme}>
            <RootStack/>
        </NavigationContainer>
    )
}

const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.white
    },
  };