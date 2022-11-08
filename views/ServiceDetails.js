import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddPackage from './ServicesDetails/AddPackage';
import Cancel from './ServicesDetails/Cancel';
import Default from './ServicesDetails/Default';
import Search from './ServicesDetails/Search';
import ShowAllPackages from './ServicesDetails/ShowAllPackages';

export default function ServiceDetails() {
  const navigation = useNavigation();
  const selectedService = navigation.getState().routes[1].params;

  switch (selectedService.id) {
    case 1:
      return AddPackage(selectedService);
    case 2:
      return Cancel(selectedService);
    case 3:
      return ShowAllPackages(selectedService);
    case 4:
      return Search(selectedService);
    default:
      return Default(selectedService);
  }
}
