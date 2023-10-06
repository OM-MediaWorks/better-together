import Reveal from 'https://esm.sh/reveal.js';
import HighLight from 'https://esm.sh/reveal.js/plugin/highlight/highlight.esm'
import revealSvgFragment from './reveal-svg-fragment.js';

const unsplashItems = [...document.querySelectorAll('[data-unsplash')]
for (const unsplashItem of unsplashItems) {
   const id = unsplashItem.getAttribute('data-unsplash')
   unsplashItem.setAttribute('data-background', `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2200&q=80`)
}

const deck = new Reveal()
deck.initialize({
   hash: true,
   plugins: [revealSvgFragment, HighLight],
   controlsTutorial: false,
   controls: false
})


const opacityItems = [...document.querySelectorAll('[data-opacity')]

setTimeout(() => {
   for (const opacityItem of opacityItems) {
      const hash = opacityItem.getAttribute('data-background')
      const backgroundElements = document.querySelectorAll(`[data-background-hash^="${hash}"]`)
      for (const backgroundElement of backgroundElements) {
         backgroundElement.classList.add('opacity')
      }
   }   
}, 300)

