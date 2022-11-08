import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/drone-delivery.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    marginTop: Constants.statusBarHeight + 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 120,
    width: 120,
  },
});
