import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import styles from './styles';

interface Props {
  reminders: Array<{ id: string; time: number; name: string }>;
}

const ReminderList = (props: Props) => {
  const { reminders } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={reminders}
        renderItem={({ item }) => (
          <View style={styles.reminderContainer}>
            <Text style={styles.reminderText}>{item.name}</Text>
            <Text style={styles.reminderTime}>{item.time}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ReminderList;
