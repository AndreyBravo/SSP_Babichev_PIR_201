import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Text style={{ fontSize: 24 }}>5 книжных новинок</Text>
      </View>
      <View style={styles.second}>
        <Text>Высокая чувствительность как талант</Text>
      </View>
      <View style={styles.third}>
        <Text>
          Способность тонко чувствительность иногда считается недостатком, но
          психологи смело заявляют, что на самом деле очень крутой
          талант.Способность тонко чувствительность иногда считается
          недостатком, но психологи смело заявляют, что на самом деле очень
          крутой талант.Способность тонко чувствительность иногда считается
          недостатком, но психологи смело заявляют, что на самом деле очень
          крутой талант.
        </Text>
      </View>
      <Button
        title="Читать далее"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  first: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  second: {
    flex: 2,
    backgroundColor: "#C0C0C0",
    alignItems: "center",
    justifyContent: "center",
  },
  third: {
    flex: 3,
    backgroundColor: "#808080",
    padding: 20,
  },
});
