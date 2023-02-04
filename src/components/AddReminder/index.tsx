import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import styles from './styles';

interface Props {
  onAdd: (name: string, time: number) => void;
}

const AddReminder = (props: Props) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState(0);

  const { onAdd } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Reminder name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Reminder time (in seconds)"
        keyboardType="numeric"
        value={time.toString()}
        onChangeText={(text) => setTime(parseInt(text, 10))}
      />
      <Button title="Add" onPress={() => onAdd(name, time)} />
    </View>
  );
};

export default AddReminder;
