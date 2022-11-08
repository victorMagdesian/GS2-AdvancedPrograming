import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { PackagesContext } from '../controllers/PackagesContext';

export default function Forms() {
  const { addPackage } = useContext(PackagesContext);
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      reqDate: '',
    },
  });

  const onSubmit = (data) => {
    addPackage(data);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>*Nome de identificação</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={(value) => onChange(value)} value={value} />
        )}
        name='title'
        rules={{ required: true }}
      />
      <Text style={styles.label}>*Dia do pedido</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={(value) => onChange(value)} value={value} placeholder='Formato: xx/xx/xxxx' />
        )}
        name='reqDate'
        rules={{
          required: true,
          pattern: {
            message: 'Data inválida',
            value: /^\d{2}\/\d{2}\/\d{4}$/,
          },
        }}
      />
      <View style={styles.button}>
        <Button style={styles.buttonInner} color='white' title='Cadastrar' onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 5,
    fontSize: 16,
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  container: {
    padding: 8,
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
