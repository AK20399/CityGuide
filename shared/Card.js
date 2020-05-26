import React from 'react';
import {
	StyleSheet,
	Text,
	Dimensions,
	Image,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, image }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.card}
			onPress={() => {
				if (title == 'College') {
					navigation.navigate('college', { title });
				} else if (title == 'Hostel') {
					navigation.navigate('hostelPg', { title });
				} else {
					navigation.navigate('commonList', { title: title });
				}
			}}
		>
			<Image source={image} style={styles.cardImage} />
			<Text style={styles.cardTitle}>{title}</Text>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		elevation: 5,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#fff',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: '5%',
		marginVertical: '5%',
		margin: 2,
		height: 200,
		width: Dimensions.get('window').width / 2 - 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardTitle: {
		position: 'absolute',
		bottom: 20,
		fontWeight: 'bold',
		marginTop: 20,
	},
	cardImage: {
		position: 'absolute',
		top: 30,
		width: 100,
		height: 100,
	},
});

export default Card;
