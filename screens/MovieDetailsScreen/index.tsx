import React from "react";
import { Text, View } from "../../components/Themed";
import { Image, Pressable, FlatList } from "react-native";
import movie from "../../assets/data/movie";
import { MaterialIcons, Entypo, AntDesign, Feather } from "@expo/vector-icons";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import EpisodeItem from "../../components/EpisodeItem";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];
const seasonNames = movie.seasons.items.map((season) => season.name);
const MovieDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.Image}
        source={{
          uri: firstEpisode.poster,
        }}
      />

      <FlatList
        data={firstSeason.episodes.items}
        style={{ marginBottom: 250 }}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            {/* match year age season hd  */}
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            {/*  Play Button  */}
            <Pressable
              onPress={() => console.warn("Play")}
              style={styles.playButton}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>
            {/*  Download Button  */}
            <Pressable
              onPress={() => console.warn("Download")}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>

            {/* plot */}
            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/* row with icons */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={30} color="white" />
                <Text style={{ color: "darkgrey" }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                <Feather name="send" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
              <Picker
                style={{ backgroundColor: "white" }}
                selectedValue={seasonNames}
                onValueChange={(itemValue, itemIndex) => {}}
              >
                {seasonNames.map((seasonName) => (
                  <Picker.Item
                    label={seasonName}
                    value={seasonName}
                    key={3445}
                  />
                ))}
                {console.log(Picker)}
              </Picker>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
