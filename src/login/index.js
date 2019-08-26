import { html, render } from "lighterhtml";

class Login extends HTMLDivElement {
    constructor(...args) {
      super(...args);
      this.setAttribute('class', 'container');
      this.render = render.bind(
        this,
        this,
        this.render
      );
      this.render();
    }
    render() {
      return html`
      <button class="button">weehee</button>
    `;
    }
}

customElements.define('w-login', Login, {extends: 'div'});
export default Login;