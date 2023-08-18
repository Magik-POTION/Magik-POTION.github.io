import { Text } from "react-native-paper";
import ProjectCard from "./ProjectCard";
import { StyleSheet, View } from "react-native";
import Project from "../classes/Project";
import controller from "../assets/controller-custom.png";
import movie from "../assets/movie-custom.png";
import nutrition from "../assets/nutrition-custom.png";

const projects: Project[] = [
  {
    title: "GamePot",
    description: "A video game experience sharing application",
    url: "https://sites.google.com/view/iongametracker/home",
    imageSrc: controller,
  },
  {
    title: "VidPot",
    description: "A movie, tv series, and anime experience sharing application",
    url: "https://sites.google.com/view/ionmovietracker/home",
    imageSrc: movie,
  },
  {
    title: "NutriPot",
    description: "A meal building and nutrition tracking application",
    url: "https://sites.google.com/view/ion-nutrion/home",
    imageSrc: nutrition,
  },
];

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
  },
  projects: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  title: {
    margin: 16,
  },
});

const Projects = () => {
  return (
    <View style={styles.view}>
      <Text variant="titleLarge" style={styles.title}>
        Projects
      </Text>
      <View style={styles.projects}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </View>
    </View>
  );
};

export default Projects;
