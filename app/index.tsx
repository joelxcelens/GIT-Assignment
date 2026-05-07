import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.upperText}>My Name is</Text>
        <Text style={styles.bottomText}>Bamidele Boluwatife</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  upperText: {
    fontSize: 20,
  },
  bottomText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
  },
});
