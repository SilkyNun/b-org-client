import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import SignUpForm from './modules/sign-up/SignUpForm';

export const App = () => {
  return (
    <>
      <StatusBar style='auto' translucent={false} backgroundColor='white' />
      <SignUpForm />
    </>
  );
}

registerRootComponent(App);

