import React from 'react';

// screen
import { createStackNavigator } from '@react-navigation/stack';

// components
import Home from '../components/homeStack/Home';
import Header from '../shared/Header';
import College from '../components/homeStack/College';
import CommonList from '../components/homeStack/CommonList';
import HostelPg from '../components/homeStack/HostelPg';
import SingleItem from '../components/homeStack/SingleItem';

const HomeStack = () => {
	const HomeStack = createStackNavigator();

	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name='home'
				component={Home}
				options={({ navigation }) => ({
					headerTitle: () => (
						<Header navigation={navigation} title='CityGuide' />
					),
				})}
			/>
			<HomeStack.Screen name='college' component={College} />
			<HomeStack.Screen name='hostelPg' component={HostelPg} />
			<HomeStack.Screen name='commonList' component={CommonList} />
			<HomeStack.Screen name='singleItem' component={SingleItem} />
		</HomeStack.Navigator>
	);
};

export default HomeStack;
