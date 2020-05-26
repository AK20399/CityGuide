import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation, title }) => {
	const openMenu = () => {
		navigation.openDrawer();
	};

	return (
		<View>
			<View style={{ flexDirection: 'row' }}>
				<MaterialIcons
					name='menu'
					size={28}
					onPress={openMenu}
					style={styles.icon}
				/>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		marginTop: 3,
		marginLeft: 40,
		fontWeight: 'bold',
		fontSize: 20,
		color: '#333',
		letterSpacing: 1,
	},
	icon: {
		position: 'absolute',
		left: 0,
	},
});

export default Header;
