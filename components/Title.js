import { View, Text, StyleSheet } from 'react-native';

export default function Title({ data: selectedService }) {
  return (
    <View>
      <Text style={styles.title}>
        {selectedService.id} - {selectedService.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textTransform: 'capitalize',
    fontSize: 22,
    color: '#F9F871',
    fontWeight: '700',
    marginBottom: 10,
  },
});
