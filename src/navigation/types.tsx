import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	Auth: NavigatorScreenParams<AuthStackParamList>;
	Home: NavigatorScreenParams<HomeTabsParamList>;
};

export type AuthStackParamList = {
	Login: undefined;
	Password: { tel: string };
	Phone: undefined;
	SMS: { tel: string };
	SignUp: undefined;
};

export type HomeTabsParamList = {};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
	CompositeScreenProps<
		NativeStackScreenProps<AuthStackParamList, T>,
		RootStackScreenProps<keyof RootStackParamList>
	>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
