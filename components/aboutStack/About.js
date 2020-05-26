import React from 'react';
import {
	Dimensions,
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from 'react-native';

const About = ({ navigation }) => {
	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.card}
					onPress={() => navigation.navigate('About App')}
				>
					<Text style={styles.cardTitle}>About App</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.card}
					onPress={() => navigation.navigate('Contact Us')}
				>
					<Text style={styles.cardTitle}>Contact Us</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 2,
	},
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
		fontWeight: 'bold',
		marginTop: 20,
	},
});

export default About;
