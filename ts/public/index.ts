//Appcontainer
import './Components/index.js';
import './Components/data.js';


class Appcontainer extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode: 'open'})
    
    }
//Base dentro del componente
//Se diferencia en el renderizado, se crea el botón

    connectedCallback(){
        this.render()

}

render(){

    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
    <profile-card name = "isaaa" ></profile-card>
    `

 }
}

customElements.define('app-container', Appcontainer)



