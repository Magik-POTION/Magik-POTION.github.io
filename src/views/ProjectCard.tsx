import { Card, Text } from "react-native-paper";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import Project from "../classes/Project";

const styles = StyleSheet.create({
  card: {
    width: 250,
    margin: 8,
    backgroundColor: "transparent",
    borderColor: "#c8a2c8",
    borderWidth: 2,
  },
  cover: { backgroundColor: "transparent" },
  title: {
    alignSelf: "center",
  },
});

const ProjectCard = ({ project }: { project: Project }) => {
  const openURL = () => {
    Linking.openURL(project.url);
  };

  return (
    <TouchableOpacity onPress={openURL}>
      <Card style={styles.card}>
        <Card.Cover
          source={{ uri: project.imageSrc }}
          style={styles.cover}
          resizeMode="contain"
        />
        <Card.Title title={project.title} style={styles.title} />
        <Card.Content>
          <Text>{project.description}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default ProjectCard;
