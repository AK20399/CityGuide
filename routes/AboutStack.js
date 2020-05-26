import React from 'react';

// navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import About from '../components/aboutStack/About';
import AboutApp from '../components/aboutStack/AboutApp';
import ContactUs from '../components/aboutStack/ContactUs';
import Header from '../shared/Header';

const AboutStack = () => {
	const AboutStack = createStackNavigator();

	return (
		<AboutStack.Navigator>
			<AboutStack.Screen
				name='About'
				component={About}
				options={({ navigation }) => ({
					headerTitle: () => <Header navigation={navigation} title='About' />,
				})}
			/>
			<AboutStack.Screen name='About App' component={AboutApp} />
			<AboutStack.Screen name='Contact Us' component={ContactUs} />
		</AboutStack.Navigator>
	);
};

export default AboutStack;
