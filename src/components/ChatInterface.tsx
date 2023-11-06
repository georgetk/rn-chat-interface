import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Button,
} from 'react-native';
import MessageItem from './MessageItem';
import SeparatorView from './SeparatorView';
import CrossSVG from './CrossSVG';

type ChatInterfaceProps = {
  title: string;
  headerColor: string;
  onClose: () => void;
  isVisible?: boolean;
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  title,
  headerColor,
  onClose,
  isVisible = true,
}) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef<FlatList<string> | null>(null);

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages((prevMessages) => [inputText, ...prevMessages]);
      setInputText('');
    }
  };

  useEffect(() => {
    if (messages.length && flatListRef?.current) {
      flatListRef.current.scrollToIndex({ animated: true, index: 0 });
    }
  }, [messages]);

  if (!isVisible) {
    return <View />;
  }

  return (
    <KeyboardAvoidingView
      style={styles.mainView}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
      <View style={[styles.headerView, { backgroundColor: headerColor }]}>
        <Text style={styles.headerText}>{title}</Text>
        <CrossSVG />
        <Button title="Close" onPress={onClose} />
      </View>

      <FlatList
        ref={flatListRef}
        style={styles.flatListStyle}
        contentContainerStyle={
          messages.length ? styles.flatListContainer : styles.emptyList
        }
        inverted
        data={messages}
        renderItem={({ item, index }) => (
          <MessageItem index={index} text={item} />
        )}
        ItemSeparatorComponent={SeparatorView}
        ListEmptyComponent={<Text>No messages yet</Text>}
      />

      <TextInput
        style={styles.chatInput}
        placeholder="Type a message"
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={sendMessage}
        accessibilityLabel="Type a message input"
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1 },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: { fontSize: 18 },
  flatListStyle: {
    paddingHorizontal: 10,
  },
  flatListContainer: {
    paddingVertical: 50,
    marginVertical: 30,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatInput: {
    paddingHorizontal: 10,
    fontSize: 15,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 10,
  },
});

export default ChatInterface;
