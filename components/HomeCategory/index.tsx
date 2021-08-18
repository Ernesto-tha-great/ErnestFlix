import * as React from "react";
import { Image, FlatList } from "react-native";
import styles from "./styles";
import { Text, View } from "../../components/Themed";

interface HomeCategoryProps {
  category: {
    id: String;
    title: String;
    movies: { id: String; poster: String }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
