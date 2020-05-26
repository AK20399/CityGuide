import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

// Image
import { getImages } from '../../Database/dbImages';

const SingleItem = ({ navigation, route: { params: item } }) => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		navigation.setOptions({ headerTitle: item.title });
		setData({ ...item, img: getImages(item.title) });
		setLoading(false);
	}, []);

	if (loading) {
		return (
			<View>
				<Image source={require('../../assets/loading.gif')} />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				{data.img && <Image source={getImages(data.title)} />}
				{data.title && <Text style={styles.title}>{data.title}</Text>}
				{data.address && <Text style={styles.address}>{data.address}</Text>}
				{data.contact && <Text style={styles.contact}>{data.contact}</Text>}
				{data.timing && <Text style={styles.timing}>{data.timing}</Text>}
				{data.description && (
					<Text style={styles.description}>{data.description}</Text>
				)}
				{data.location && (
					<FlatList
						style={{ margin: 20 }}
						keyExtractor={(data) => data.title}
						data={data.location}
						renderItem={({ item }) => (
							<View style={{ margin: 10 }}>
								<Text>{item}</Text>
							</View>
						)}
					/>
				)}
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 30,
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 25,
		marginBottom: 30,
	},
	body: {
		fontSize: 15,
	},
});

export default SingleItem;
