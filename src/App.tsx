import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import PhoneForm from './modules/sign-up/PhoneForm';

export const App = () => {
  return (
    <>
      <StatusBar style='auto' translucent={false} backgroundColor='white' />
      <PhoneForm />
    </>
  );
}

registerRootComponent(App);

