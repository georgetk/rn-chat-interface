# rn-chat-interface

A Chat UI for React Native

## Installation

```sh
yarn add rn-chat-interface
```

## Usage

```js
import {ChatInterface} from 'rn-chat-interface';

// ...

const App = () => {
  const [visible, setVisible] = useState(true);

  const closeChat = () => {
    setVisible(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ChatInterface
        isVisible={visible}
        headerColor="cyan"
        title="Chat"
        onClose={closeChat}
      />
    </SafeAreaView>
  );
};
```

## Props

1. isVisible - Boolean value determines whether to show or not the component. Default is true.
2. headerColor - Desired color of the top header.
3. title - Text displayed in the top header.
4. onClose - Expects a function that will be called upon pressing "Close".
