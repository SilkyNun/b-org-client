import { registerRootComponent } from 'expo';
import { View } from 'react-native';
import SignIn from './screens/SignIn';


export const App = () => {
  return (
    <View style={{
      flex: 1
    }}>
      <SignIn/>
    </View>
  );
}

registerRootComponent(App);

