import { ScrollView } from "react-native";
import Header from "./Header";
import Projects from "./Projects";
import ParticlesBackground from "./ParticlesBackground";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <ParticlesBackground />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Header />
        <Projects />
        <Footer />
      </ScrollView>
    </>
  );
};

export default App;
