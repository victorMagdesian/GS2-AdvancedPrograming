import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Square(params) {
  const navigation = useNavigation();
  const data = params.data;
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ServiceDetails', data)}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.title}</Text>
        <Image style={styles.image} source={data.icon}></Image>
        <Text style={styles.shortDescription}>{data.briefDescription}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
  },
  card: {
    backgroundColor: 'white',
    marginVertical: 10,
    height: 126,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: 'blue',
    fontSize: 17,
  },

  image: {
    height: 50,
    width: 50,
    marginVertical: 5,
  },
  shortDescription: {
    color: 'grey',
    fontSize: 13,
    textAlign: 'center',
  },
});
