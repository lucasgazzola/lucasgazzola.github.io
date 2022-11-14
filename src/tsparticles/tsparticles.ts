import { tsParticles } from 'tsparticles-engine'
import { loadStarsPreset } from 'tsparticles-preset-stars'

await loadStarsPreset(tsParticles) // this is required only if you are not using the bundle script

await tsParticles.load('tsparticles', {
  background: {
    opacity: 0,
  },
  particles: {
    number: {
      value: 17,
    },
    color: {
      value: '#487ce4',
    },
  },
  preset: 'stars',
})
