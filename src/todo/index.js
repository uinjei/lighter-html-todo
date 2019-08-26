import { html, render } from "lighterhtml";
import Table from "../components/table";
import Control from "../components/control";
import Box from "../components/box";

class Todo extends HTMLDivElement {
    constructor(...args) {
      super(...args);
      this.setAttribute('class','container');
      this.render = render.bind(
        this,
        this,
        this.render
      );
      this.render();
    }

    render() {
      const table = {
        header: ['foo', 'bar'],
        rows: [
          {id: 1, name: 'name 1'},
          {id: 2, name: 'name 2'}
        ]
      };

      //type, label, placeholder, data, help
      const form = [
        {
          type: 'input',
          label: 'Title',
          placeholder: 'Enter title',
          help: 'this is required'
        },
        {
          type: 'input',
          label: 'Description',
          placeholder: 'Enter a description',
          help: 'enter a brief description'
        },
        {
          type: 'select',
          label: 'Category',
          data: {
            options: ['Church','Work','Home']
          },
          help: 'what type of task is this'
        }
      ];

      return html`
        ${Box(form.map(Control))}
        ${Box(Table(table))}
      `;
    }
}

customElements.define('w-form', Todo, {extends: 'div'});
export default Todo;