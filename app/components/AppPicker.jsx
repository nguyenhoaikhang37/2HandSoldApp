import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

const AppPicker = ({
  width = "100%",
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              size={20}
              color={colors.medium}
              name={icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            size={20}
            color={colors.medium}
            name="chevron-down"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
            numColumns={3}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
});

export default AppPicker;
