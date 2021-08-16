import * as React from "react";
import styles from "./HomeScreen/styles";
import { Text, View } from "../components/Themed";
import categories from "../assets/data/categories";
import HomeCategory from "../components/HomeCategory";
import { FlatList } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/*  list of categories  */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;
