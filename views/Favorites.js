import { StyleSheet, Text, View, FlatList } from 'react-native';
import { PackagesContext } from '../controllers/PackagesContext';
import { useContext } from 'react';
import Card from '../components/Card';

export default function Favorites() {
  const { packages } = useContext(PackagesContext);

  function FavoritesPackagesList() {
    const favoritePackages = packages.filter((item) => item.flagged);

    if (!favoritePackages.length) {
      return (
        <View>
          <Text style={styles.defaultText}>Sem entregas favoritadas.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.packagesList}>
          <FlatList data={favoritePackages} renderItem={({ item }) => <Card delivery={item}></Card>}></FlatList>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de pacotes favoritados</Text>
      <FavoritesPackagesList></FavoritesPackagesList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cornflowerblue',
  },
  title: {
    marginBottom: 10,
    textTransform: 'capitalize',
    fontSize: 22,
    color: '#F9F871',
    fontWeight: '700',
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
