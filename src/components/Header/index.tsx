import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Drug Reminder</Text>
  </View>
);

export default Header;
