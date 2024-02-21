import React, { useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Button,
} from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideContainer: {
    flex: 2,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { flex: 1, fontSize: 30, paddingTop:100 },
  content: { flex: 3 },
  image: {
    width: 250,
    height: 250,
    resizeMode: "cover",
  },
  more: {
    
  },
});

const App = () => {
  const scrollViewRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://brightmagazine.ru/wp-content/uploads/2024/02/adrien-king-XzBluXxBoyQ-unsplash-600x400.jpg",
    "https://brightmagazine.ru/wp-content/uploads/2024/02/parabol-the-agile-meeting-toolbox-BDfQnva_6mU-unsplash-768x512.jpg",
    "https://brightmagazine.ru/wp-content/uploads/2024/02/greg-rosenke-OqP4uMDQ1e0-unsplash-768x512.jpg",
  ];

  const handleScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slide);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My travel</Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={200}
        decelerationRate="fast"
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slideContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.content}>
        Существует достаточно много вредных привычек, которые мешают нам
        становится лучше, тормозят наш рост и развитие. И это не только те самые
        вредные привычки, о которых часто говорят диетологи и врачи. Часто это
        именно психологические проблемы, от которых, если поработать над собой,
        можно избавиться самостоятельно
      </Text>
      <Button onPress={()=>console.log("Press button")} style={styles.more} title="Learn More" color="#841584" />
    </View>
  );
};

export default App;
