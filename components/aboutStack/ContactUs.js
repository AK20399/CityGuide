import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactUs = () => {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.title}>Contact Us</Text>
			</View>
			<View style={styles.card2}>
				<Text style={styles.body}>Aakash K Darji</Text>
				<Text style={styles.body}>aakash.darji20@gmail.com</Text>
				<Text style={styles.body}>9537097751</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 70,
	},
	card: {
		flex: 2,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 5,
		marginBottom: 50,
		borderRadius: 50,
	},
	card2: {
		backgroundColor: '#ccc',
		flex: 5,
		elevation: 5,
		borderRadius: 50,
		marginBottom: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
	},
	body: {
		fontSize: 30,
	},
});

export default ContactUs;
