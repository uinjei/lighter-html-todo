import { html, render } from "lighterhtml";
import Header from "./header";
import Login from "../login";
import Form from "../todo"

class Layout extends HTMLElement {
    constructor(...args) {
      super(...args);
      this.handleMenu = this.handleMenu.bind(this);
      this.render = render.bind(
        this,
        this,
        this.render
      );
      this.render();
    }

    static get observedAttributes() { return ['active-page']; }

    attributeChangedCallback() { this.render(); }

    handleMenu(e) {
        this.setAttribute('active-page', e.target.text);
    }

    handleBurger() {
        this.classList.toggle('is-active');
        this.parentElement.parentElement.querySelector(".navbar-menu").classList.toggle('is-active');
    }

    render() {
      const activePage = this.getAttribute('active-page');
      const page = activePage==='Home'?new Form:new Login;
      return html`
        ${Header(this.handleMenu, this.handleBurger)}
        <section class="section">
          ${page}
        </section>
    `;
    }
}

customElements.define('w-layout', Layout);
export default Layout;