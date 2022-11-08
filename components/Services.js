import { StyleSheet, Text, View } from 'react-native';
import Square from './Square';
import ServicesMock from '../data/ServicesMock';

export default function Services() {
  return (
    <View style={styles.container}>
      <View style={styles.textBorder}>
        <Text style={styles.title}>Drone on Cloud</Text>
        <Text style={styles.subtitle}>Serviços disponiveis</Text>
      </View>
      <View style={styles.servicesGrid}>
        <Square data={ServicesMock[0]}></Square>
        <Square data={ServicesMock[1]}></Square>
        <Square data={ServicesMock[2]}></Square>
        <Square data={ServicesMock[3]}></Square>
        <Square data={ServicesMock[4]}></Square>
        <Square data={ServicesMock[5]}></Square>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  title: {
    textTransform: 'uppercase',
    fontSize: 30,
    textAlign: 'center',
    color: '#F9F871',
    fontWeight: '900',
    paddingBottom: 10,
  },

  subtitle: {
    textTransform: 'capitalize',
    fontSize: 20,
    textAlign: 'center',
    color: '#F9F871',
    fontWeight: '500',
    paddingBottom: 10,
  },

  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  textBorder: {
    marginHorizontal: 25,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: '#F9F871',
  },
});
