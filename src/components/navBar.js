import React from 'react';
import { Component } from "react"

class navBar extends Component {
    constructor() {
        super();

        this.newComponent = this.newComponent.bind(this);
    }

    newComponent(a) {
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">PVFD</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="/">Home</a>
                            <a className="nav-item nav-link" href="/contact">Contact</a>
                            <a className="nav-item nav-link" href="/about">About</a>
                            <a className="nav-item nav-link" href="/donate">Donate</a>
                            <a className="nav-item nav-link" href="/volunteer">Volunteer</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navBar;