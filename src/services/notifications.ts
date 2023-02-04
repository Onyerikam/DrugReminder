import { Notifications } from 'expo';

const requestNotificationPermission = async () => {
  const permission = await Notifications.requestPermissionsAsync();
  return permission.granted;
};

const scheduleNotification = (title: string, body: string, time: number) => {
  Notifications.scheduleLocalNotificationAsync({
    title,
    body,
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  },
  {
    time,
    repeat: 'day',
  });
};

const cancelNotification = () => {
  Notifications.cancelAllScheduledNotificationsAsync();
};

export { requestNotificationPermission, scheduleNotification, cancelNotification };