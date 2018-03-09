import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <a href="/" className="logo">
                    <span className="logo-mini"><b>G</b>IF</span>
                    <span className="logo-lg"><b>Gest</b>IF</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Abrir/Fechar Navegação</span>
                    </a>

                </nav>
            </header>
        )
    }
}