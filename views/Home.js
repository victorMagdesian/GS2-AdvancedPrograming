import Header from '../components/Header';
import Services from '../components/Services';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Services></Services>
      {/* <StatusBar style='auto' hidden /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
  },
});
