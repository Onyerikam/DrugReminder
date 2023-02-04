// EditReminder/index.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  reminder: {
    id: string;
    title: string;
    date: string;
    time: string;
  };
  onEdit: (reminder: { id: string; title: string; date: string; time: string }) => void;
}

const EditReminder: React.FC<Props> = ({ reminder, onEdit }) => {
  const [title, setTitle] = useState(reminder.title);
  const [date, setDate] = useState(reminder.date);
  const [time, setTime] = useState(reminder.time);

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />

      <Text style={styles.inputLabel}>Date:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter date"
      />

      <Text style={styles.inputLabel}>Time:</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="Enter time"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onEdit({ id: reminder.id, title, date, time })}
        >
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputLabel: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0077c7',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditReminder;
