import { registerRootComponent } from 'expo';
import Navigation from './navigation/Navigation';

export const App = () => {
	return <Navigation />;
};

registerRootComponent(App);
