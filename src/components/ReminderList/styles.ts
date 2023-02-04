import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reminderContainer: {
    height: 60,
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reminderText: {
    flex: 1,
    fontSize: 16,
  },
  reminderTime: {
    fontSize: 16,
    color: '#888',
  },
});

export default styles;
