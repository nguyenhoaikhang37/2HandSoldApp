import { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpeg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((x) => x.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected ", item)}
            // kéo sang phải để delete
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        // dấu gạch ngang chia cắt
        ItemSeparatorComponent={ListItemSeparator}
        // f5 data
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
