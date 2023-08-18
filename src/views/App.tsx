import { ScrollView, View } from "react-native";
import Header from "./Header";
import Projects from "./Projects";
import ParticlesBackground from "./ParticlesBackground";
import Footer from "./Footer";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ParticlesBackground />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Header />
        <Projects />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default App;
