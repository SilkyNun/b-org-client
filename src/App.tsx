import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import SmsForm from './modules/sign-up/SmsForm';

export const App = () => {
  return (
    <>
      <StatusBar style='auto' translucent={false} backgroundColor='white' />
      <SmsForm tel='+375 29 840-32-32' />
    </>
  );
}

registerRootComponent(App);

