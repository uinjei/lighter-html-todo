import { html } from "lighterhtml";

const Burger = (handle) => html`
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" onclick="${handle}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>
`;

const Header = (handleMenu, handleBurger) => html`
    <nav class="navbar" role="navigation" aria-label="main-navigation">
        <div class="navbar-brand">
            <a class="navbar-item">Winj App</a>
            ${Burger(handleBurger)}
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" onclick="${handleMenu}" value="home">Home</a>
                <a class="navbar-item" onclick="${handleMenu}" value="login">Login</a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">More<a/>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">About<a/>
                        <a class="navbar-item">Contacts<a/>
                        <hr class="nav-divider">
                        <a class="navbar-item">Report an issue<a/>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Signup</strong>
                        </a>
                        <a class="button is-light">
                            <strong>Login</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
`;

export default Header;