import React from 'react';
import { View } from 'react-native';

// styles
import CustomButton from '../../shared/Button';

// DATA
import data from '../../Database/Data.json';

const College = ({ navigation }) => {
	const gotoList = (data) => {
		navigation.navigate('commonList', { title: data });
	};

	return (
		<View style={{ marginTop: 50 }}>
			<CustomButton
				text='Arts College'
				onPress={() => gotoList('artsCollege')}
			/>
			<CustomButton
				text='Science College'
				onPress={() => gotoList('scienceCollege')}
			/>
			<CustomButton
				text='Commerce College'
				onPress={() => gotoList('commerceCollege')}
			/>
			<CustomButton
				text='Engineering College'
				onPress={() => gotoList('engineeringCollege')}
			/>
		</View>
	);
};

export default College;
