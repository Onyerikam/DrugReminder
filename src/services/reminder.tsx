import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getData, setData, clearData } from '../utils/helpers';
import { requestNotificationPermission, scheduleNotification, cancelNotification } from './notifications';
import { DRUG_REMINDER_NOTIFICATION_ID } from '../utils/constants';

const ReminderScreen = () => {
  const [reminderEnabled, setReminderEnabled] = useState(false);

  useEffect(() => {
    const checkReminder = async () => {
      const data = await getData(DRUG_REMINDER_NOTIFICATION_ID);
      setReminderEnabled(data !== null);
    };

    checkReminder();
  }, []);

  const toggleReminder = async () => {
    if (reminderEnabled) {
        cancelNotification();
      await clearData(DRUG_REMINDER_NOTIFICATION_ID);
      setReminderEnabled(false);
    } else {
      const permissionGranted = await requestNotificationPermission();
      if (permissionGranted) {
        scheduleNotification('Time to take your drug', 'Don\'t forget to take your daily dose', new Date().getTime() + 1000);
        await setData(DRUG_REMINDER_NOTIFICATION_ID, true);
        setReminderEnabled(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drug Reminder</Text>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleReminder}>
        <Text style={styles.toggleButtonText}>{reminderEnabled ? 'Disable' : 'Enable'} Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  toggleButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f4511e',
  },
  toggleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ReminderScreen;