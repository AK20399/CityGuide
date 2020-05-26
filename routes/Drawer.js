import React from 'react';

// Stacks
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

// navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = () => {
	const RootDrawer = createDrawerNavigator();

	return (
		<NavigationContainer>
			<RootDrawer.Navigator>
				<RootDrawer.Screen name='Home' component={HomeStack} />
				<RootDrawer.Screen name='About' component={AboutStack} />
			</RootDrawer.Navigator>
		</NavigationContainer>
	);
};

export default Drawer;
