import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as Cellular from 'expo-cellular';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
