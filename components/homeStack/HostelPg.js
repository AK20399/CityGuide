import React from 'react';
import { View } from 'react-native';

// shared
import CustomButton from '../../shared/Button';

const HostelPg = ({ navigation }) => {
	const gotoList = (data) => {
		navigation.navigate('commonList', { title: data });
	};
	return (
		<View style={{ marginTop: 50 }}>
			<CustomButton text='Boys Hostel' onPress={() => gotoList('boysHostel')} />
			<CustomButton
				text='Girls Hostel'
				onPress={() => gotoList('girlsHostel')}
			/>
			<CustomButton text='PG Hostel' onPress={() => gotoList('pg')} />
		</View>
	);
};

export default HostelPg;
