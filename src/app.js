import { html, } from "lighterhtml";
import "./template/layout";
import "./app.scss";

class App extends HTMLElement {
    connectedCallback() {
      this.appendChild(html`
        <w-layout active-page="Home"/>
      `);
    }
}

customElements.define('app-component', App);
