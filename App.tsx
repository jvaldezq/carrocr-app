import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footers from "./sections/Footers";
import CarList from "@/sections/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CarList />
      <Footers />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
