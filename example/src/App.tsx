import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { ChatInterface } from 'rn-chat-interface';

export default function App() {
  const [visible, setVisible] = React.useState(true);

  const closeChat = () => {
    setVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ChatInterface
        isVisible={visible}
        headerColor="cyan"
        title="Chat"
        onClose={closeChat}
      />
    </SafeAreaView>
  );
}
