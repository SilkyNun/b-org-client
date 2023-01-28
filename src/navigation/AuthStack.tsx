import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from '../screens/auth/sign-in/LoginScreen';
import PasswordForm from '../screens/auth/sign-in/PasswordScreen';
import PhoneForm from '../screens/auth/sign-up/PhoneScreen';
import SignUpForm from '../screens/auth/sign-up/SignUpScreen';
import SmsForm from '../screens/auth/sign-up/SmsScreen';
import { AuthStackParamList } from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function () {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{/* sign in stack group */}
			<AuthStack.Group>
				<AuthStack.Screen name='Login' component={LoginForm} />
				<AuthStack.Screen name='Password' component={PasswordForm} />
			</AuthStack.Group>
			{/* sign up stack group */}
			<AuthStack.Group>
				<AuthStack.Screen name='Phone' component={PhoneForm} />
				<AuthStack.Screen name='SMS' component={SmsForm} />
				<AuthStack.Screen name='SignUp' component={SignUpForm} />
			</AuthStack.Group>
		</AuthStack.Navigator>
	);
}
