import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import SignInPassword from './modules/sign-in/SignInPassword';

export const App = () => {
  return (
    <>
      <StatusBar style='auto' translucent={false} backgroundColor='white'/>
      <SignInPassword tel='+375 29 840-32-32' />
    </>
  );
}

registerRootComponent(App);

