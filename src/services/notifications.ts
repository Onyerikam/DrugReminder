import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const DRUG_REMINDER_NOTIFICATION_ID = 'DRUG_REMINDER_NOTIFICATION_ID';

const requestNotificationPermission = async () => {
  const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  return permission.status === 'granted';
};

const scheduleNotification = (title: string, body: string, time: number) => {
  Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      seconds: time,
    },
  });
};

const cancelNotification = () => {
  Notifications.cancelScheduledNotificationAsync(DRUG_REMINDER_NOTIFICATION_ID);
};

export {
  requestNotificationPermission,
  scheduleNotification,
  cancelNotification,
};
