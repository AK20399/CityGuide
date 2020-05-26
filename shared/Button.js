import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const FlatButton = ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		marginLeft: 50,
		marginRight: 50,
		margin: 20,
		borderRadius: 8,
		paddingVertical: 20,
		backgroundColor: '#000',
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
});

export default FlatButton;
