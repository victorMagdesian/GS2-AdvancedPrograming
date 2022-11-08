import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Package } from '../models/Package';
import { useContext } from 'react';
import { PackagesContext } from '../controllers/PackagesContext';

export default function Card({ delivery }) {
  const { setFavorite } = useContext(PackagesContext);
  return (
    <View style={styles.container}>
      <Text style={styles.information}>Código de rastreio: {delivery.trackingNumber}</Text>
      <Text style={styles.information}>Titulo: {delivery.title}</Text>
      <Text style={styles.information}>Data do pedido: {delivery.reqDate}</Text>
      <Text style={styles.information}>Data de entrega: {delivery.deliveryDate}</Text>
      <Text style={styles.information}>Status: {delivery.status}</Text>

      <TouchableOpacity style={styles.icon} onPress={() => setFavorite(delivery.trackingNumber)}>
        <Ionicons name={delivery.flagged ? 'flag' : 'flag-outline'} size='20'></Ionicons>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 123,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    marginLeft: 5,
    marginVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
  information: {
    marginVertical: 3,
    marginLeft: 10,
    fontSize: 15,
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 5,
  },
});
