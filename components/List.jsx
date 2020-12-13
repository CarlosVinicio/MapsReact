import React, { useState } from "react";
import { FlatList, Text, View, Dimensions, StyleSheet, Button } from 'react-native';

export const List = (props) => {

	const { points, onCloseModal } = props;
 	const renderItem = (item) => {
		return (
			<View style={styles.item}>
				<Text>
					{item}
				</Text>
			</View>
		)
	}

	return (
		<>
			<View style={styles.list}>
				<FlatList
					data={points.map(point => point.name)}
					renderItem={({ item }) => renderItem(item)}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
			<View style={styles.button}>
				<Button title={'Cerrar'} onPress={onCloseModal}/>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	list: {
		height: Dimensions.get('window').height - 550,
		padding: 10
	},
	item: {
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		height: 40,
		justifyContent: 'center'
	},
	button: {
		paddingBottom: 15
	}
})