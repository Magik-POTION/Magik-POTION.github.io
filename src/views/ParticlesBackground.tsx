import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {
  Container,
  Engine,
  RecursivePartial,
  IOptions,
} from "tsparticles-engine";

const particleOptions: RecursivePartial<IOptions> = {
  autoPlay: true,
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 144,
  fullScreen: {
    enable: true,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.2,
      },
    },
  },
  particles: {
    color: {
      value: "#c8a2c8",
    },
    links: {
      color: "#a464a4",
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
      speed: 5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 200,
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
  smooth: true,
};

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
};

export default ParticlesBackground;
