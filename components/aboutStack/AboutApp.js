import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutApp = () => {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.title}>About App</Text>
			</View>
			<View style={styles.card2}>
				<Text
					style={[
						styles.body,
						{ fontWeight: 'bold', marginTop: 50, marginBottom: 20 },
					]}
				>
					CityGuide
				</Text>
				<Text style={[styles.body, { fontSize: 20, margin: 15 }]}>
					This application will provide information related to various Colleges,
					Hostel and PG, Hospital, Restaurant, ATM, Malls and Tourist Places of
					Ahmedabad city. This application is helpful for students. In this
					Application, we provide topic’s current Image, Name, Address, Contact
					number, etc. Tourist place can be used for people who don’t know about
					its history. This application also provides contact no so any user can
					contact to college, Hostel etc.
				</Text>
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

export default AboutApp;
