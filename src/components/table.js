import { html } from "lighterhtml";

const Header = (header) => html`<th>${header}</th>`; 
const Row = (row) => html`
    <tr>
        <td>${row.id}</td>
        <td>${row.name}</td>
    </tr>`;

const Table = (data) => {
    const { header, rows } = data;
    return html`
        <table class="table is-striped is-fullwidth">
            <thead>
                <tr>
                    ${header.map(Header)}
                </tr>
            </thead>
            <tbody>
                ${rows.map(Row)}
            </tbody>
        </table>   
    `;
}

export default Table;