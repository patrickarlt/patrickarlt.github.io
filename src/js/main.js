import "./lib/particles.js";

particlesJS('particles', {
  particles: {
    color: '#576F72',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 1,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0,
        sync: false
      }
    },
    size: 5,
    size_random: true,
    nb: 125,
    line_linked: {
      enable_auto: true,
      distance: 125,
      color: '#273233',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: true,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: .35
    }
  },
  interactivity: {
    enable: false,
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 1
      },
      onresize: {
        enable: true,
        mode: 'bounce', // "out" or "bounce"
        density_auto: true,
        density_area: 600 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});