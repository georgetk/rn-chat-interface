import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MessageItemProps = { index: number; text: string };

const MessageItem: React.FC<MessageItemProps> = ({ index, text }) => (
  <View key={index} style={styles.itemView}>
    <Text style={styles.itemText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  itemView: { padding: 5, backgroundColor: 'salmon' },
  itemText: { fontSize: 18 },
});

export default MessageItem;
