import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import SignUpForm from './modules/sign-up/SignUpForm';
import SmsForm from './modules/sign-up/SmsForm';

export const App = () => {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
}

registerRootComponent(App);

