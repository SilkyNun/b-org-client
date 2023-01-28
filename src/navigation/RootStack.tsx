import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../app/theme';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function () {
	const isLoggedIn = false;
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			
		>
			{isLoggedIn ? (
				<Stack.Screen name='Home' component={HomeTabs} />
			) : (
				<Stack.Screen name='Auth' component={AuthStack} />
			)}
		</Stack.Navigator>
	);
}
