import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Card from '../../components/Card';
import Title from '../../components/Title';
import { PackagesContext } from '../../controllers/PackagesContext';

export default function ShowAllPackages(params) {
  const navigation = useNavigation();
  const selectedService = params;
  const { packages } = useContext(PackagesContext);

  function PackagesList() {
    if (!packages.length) {
      return (
        <View>
          <Text style={styles.defaultText}>Sem entregas disponiveis.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.packagesList}>
          <FlatList data={packages} renderItem={({ item }) => <Card delivery={item}></Card>}></FlatList>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Title data={selectedService}></Title>
      <PackagesList></PackagesList>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    height: 25,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 10,
  },
  back: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 3,
  },
  packagesList: {
    width: '90%',
    height: '30%',
  },
  defaultText: {
    color: 'white',
    fontSize: 17,
    marginVertical: 10,
  },
});
