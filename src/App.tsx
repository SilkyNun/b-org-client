import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import SignInLogin from './modules/sign-in/SignInLogin';
import SignInPassword from './modules/sign-in/SignInPassword';
import SignUpPhone from './modules/sign-up/SignUpPhone';

export const App = () => {
  return (
    <>
      <StatusBar style='auto' translucent={false} backgroundColor='white'/>
      <SignUpPhone/>
    </>
  );
}

registerRootComponent(App);

