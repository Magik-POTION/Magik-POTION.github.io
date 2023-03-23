import { useCallback } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Particles from "react-particles";
import type {
  Container,
  Engine,
  IOptions,
  RecursivePartial,
} from "tsparticles-engine";
import { loadFull } from "tsparticles";

/* background by SVGBackgrounds.com */

const styles = StyleSheet.create({
  view: { flex: 1, flexDirection: "column" },
  content: {
    flex: 1,
    flexDirection: "column",
  },
});

const particleOptions: RecursivePartial<IOptions> = {
  autoPlay: true,
  background: {
    color: {
      value: "#120b12",
    },
  },
  fpsLimit: 144,
  fullScreen: {
    enable: true,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        style={styles.view}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />
      <ScrollView style={styles.content}>

      </ScrollView>
    </>
  );
};

export default App;
