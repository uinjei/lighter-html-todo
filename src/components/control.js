import { html } from "lighterhtml";

const Input = (data, placeholder) => html`<input class="input" type="text" placeholder="${placeholder}" value="${data}"/>`;

const Option = (option) => html`<option>${option}</option>`;

const Select = (data) => {
    const { options, selected } = data;
    return html`
        <div class="select">
            <select>
                ${options.map(Option)}
            </select>
        </div>
    `;
};

const Control = (args) => {
    const { type, label, placeholder, data, help } = args;
    return html`
        <div class="field">
            <label class="label">${label}</label>
            <div class="control">
                ${type==='input'?Input(data, placeholder):Select(data)}
            </div>
            <p class="help">${help}</p>
        </div>
    `;
};

export default Control;