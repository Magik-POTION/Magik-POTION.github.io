import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import TypeWriter, { TypewriterClass } from "typewriter-effect";

const styles = StyleSheet.create({
  header: {
    marginVertical: 64,
    marginHorizontal: 8,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#c8a2c8",
  },
  subtitle: {
    textAlign: "center",
    color: "white",
  },
  box: {
    marginVertical: 32,
    borderColor: "#ece0ec",
    borderWidth: 3,
    padding: 32,
    borderRadius: 16,
    shadowOpacity: 1,
    shadowColor: "#c8a2c8",
    shadowRadius: 32,
  },
});

const initTitle = (typewriter: TypewriterClass) => {
  typewriter
    .typeString(`K Truong`)
    .pauseFor(1000)
    .deleteAll()
    .typeString(`Magik POTION`)
    .pauseFor(1000)
    .deleteAll()
    .start();
};

const Header = () => {
  return (
    <View style={styles.header}>
      <Text variant="displayMedium" style={styles.title}>
        <TypeWriter onInit={initTitle} options={{ loop: true }} />
      </Text>
      <Text variant="headlineMedium" style={styles.subtitle}>
        Full Stack Software Engineer
      </Text>
      <View style={styles.box}>
        <Text variant="titleLarge" style={styles.subtitle}>
          Pushing the forefront of humankind with technology
        </Text>
      </View>
    </View>
  );
};

export default Header;
