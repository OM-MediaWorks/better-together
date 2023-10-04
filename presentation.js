import Reveal from 'reveal.js';
import HighLight from 'reveal.js/plugin/highlight/highlight.esm'
import revealSvgFragment from './reveal-svg-fragment';

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