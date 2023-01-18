import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { RouterProps } from "src/types";
import { useUser } from "@utils/hooks/useUser";

export default function HomeScreen({ navigation }: RouterProps) {
	const { authUser, updateUserFirestore } = useUser();

	// Update the user's displayName and/or photoURL
	const updateUserProfile = async (
		displayName?: string,
		photoURL?: string,
	) => {
		if (!authUser?.uid) {
			console.error("No user logged in");
			return;
		}

		await updateUserFirestore(authUser?.uid, {
			displayName: displayName || authUser?.displayName,
			photoURL: photoURL || authUser?.photoURL,
		});
	};

	return (
		<View style={styles.container}>
			<Text>!!THIS IS A STUB!!</Text>
			<Text>Profile for {authUser?.displayName}!</Text>

			<Button
				title="Home"
				style={styles.button}
				onPress={() => navigation.navigate("Home")}
			/>

			<Button
				title="Calendar"
				style={styles.button}
				onPress={() => navigation.navigate("Calendar")}
			/>

			<Button
				title="Friends"
				style={styles.button}
				onPress={() => navigation.navigate("Friends")}
			/>

			<Button
				title="Settings"
				style={styles.button}
				onPress={() => navigation.navigate("Settings")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		marginTop: 10,
	},
});
