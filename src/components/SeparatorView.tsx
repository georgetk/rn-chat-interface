import React from 'react';
import { View, StyleSheet } from 'react-native';

const SeparatorView: React.FC = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: { height: 10 },
});

export default SeparatorView;
