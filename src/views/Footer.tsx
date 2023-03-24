import { Linking, StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import githubIcon from "../assets/github-mark/github-mark.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email-outline-custom.png";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "transparent",
    paddingVertical: 8,
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  copyright: {
    color: "white",
    textAlign: "center",
  },
  developedBy: {
    color: "white",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    margin: 16,
  },
  email: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: 16,
  },
});

const redirectToGithub = () => {
  Linking.openURL("https://github.com/Magik-POTION");
};

const redirectToLinkedIn = () => {
  Linking.openURL("https://www.linkedin.com/in/k-truong/");
};

const openEmail = () => {
  window.open("mailto:truong.k77@gmail.com");
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text variant="titleLarge" style={styles.title}>
        More Information
      </Text>
      <View style={styles.row}>
        <IconButton
          size={42}
          iconColor="white"
          icon={email}
          onPress={openEmail}
          mode="outlined"
        />
        <IconButton
          size={42}
          iconColor="#967bb6"
          icon={githubIcon}
          onPress={redirectToGithub}
          mode="outlined"
        />
        <IconButton
          size={42}
          icon={linkedin}
          onPress={redirectToLinkedIn}
          mode="outlined"
          iconColor="#0072b1"
        />
      </View>
      <View style={styles.row}>
        <Text variant="bodyLarge" style={styles.developedBy}>
          Developed by{" "}
        </Text>
        <Text variant="bodyLarge" style={{ color: "#c8a2c8" }}>
          K Truong
        </Text>
      </View>
      <Text style={styles.copyright} variant="labelLarge">
        Copyright {new Date().getFullYear()}©
      </Text>
    </View>
  );
};

export default Footer;
