import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

// shared
import Card from '../../shared/Card';

const Home = () => {
	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.container}>
				<Card
					title='College'
					image={require('../../assets/home/college.png')}
				/>
				<Card title='Hostel' image={require('../../assets/home/hostel.png')} />
				<Card
					title='Hospital'
					image={require('../../assets/home/hospital.png')}
				/>
				<Card
					title='Restaurant'
					image={require('../../assets/home/restaurant.png')}
				/>
				<Card title='Mall' image={require('../../assets/home/mall.png')} />
				<Card
					title='Tourist Places'
					image={require('../../assets/home/tourist.png')}
				/>
				<Card title='ATM' image={require('../../assets/home/atm.png')} />
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
});

export default Home;
