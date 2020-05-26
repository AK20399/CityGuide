import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import 'react-native-get-random-values';

import axios from 'axios';

// DATA
import data from '../../Database/Data.json';

const CommonList = ({ route, navigation }) => {
	const [listData, setListData] = useState([]);
	const [loading, setLoading] = useState(true);

	// college name
	const { title } = route.params;
	console.log(title);

	useEffect(() => {
		navigation.setOptions({
			headerTitle: title,
		});

		switch (title) {
			case 'Hospital':
				setListData(data.hospital);
				setLoading(false);
				break;
			case 'Restaurant':
				setListData(data.restaurant);
				setLoading(false);
				break;
			case 'Mall':
				setListData(data.mall);
				setLoading(false);
				break;
			case 'Tourist Places':
				setListData(data.touristPlaces);
				setLoading(false);
				break;
			case 'ATM':
				setListData(data.atm);
				setLoading(false);
				break;
			case 'artsCollege':
				setListData(data.artsCollege);
				setLoading(false);
				break;
			case 'commerceCollege':
				setListData(data.commerceCollege);
				setLoading(false);
				break;
			case 'scienceCollege':
				setListData(data.scienceCollege);
				setLoading(false);
				break;
			case 'engineeringCollege':
				setListData(data.engineeringCollege);
				setLoading(false);
				break;
			case 'boysHostel':
				setListData(data.boysHostel);
				setLoading(false);
				break;
			case 'girlsHostel':
				setListData(data.girlsHostel);
				setLoading(false);
				break;
			case 'pg':
				setListData(data.pg);
				setLoading(false);
				break;

			default:
				break;
		}
	}, []);

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Image source={require('../../assets/loading.gif')} />
			</View>
		);
	}

	return (
		<FlatList
			data={listData}
			style={{ margin: 30 }}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={styles.listItem}
					onPress={() => navigation.navigate('singleItem', item)}
				>
					<Text style={styles.listTitle}>{item.title}</Text>
				</TouchableOpacity>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	listItem: {
		width: '100%',
		alignItems: 'center',
		borderRadius: 1,
		borderWidth: 1,
		padding: 15,
		marginBottom: 10,
	},
	listTitle: {
		fontWeight: 'bold',
		fontSize: 15,
	},
});

export default CommonList;
