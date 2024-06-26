import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter.ts'
// import "./practice.ts"
// import "./types.ts"
// import "./objects.ts"
import "./functions.ts"
import "./tasks.ts"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
