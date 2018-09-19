import React from 'react';
//import callApi from '../functions/callApi';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [
                {title: "Home", href: "/", key: "0"},
                {title: "Bulletin Board", href: "/bulletinBoard", key: "1"},
                {title: "Donate", href: "/donate", key: "2"},
                {title: "Volunteer", href: "/volunteer", key: "3"},
                {title: "Contact", href: "/contact", key: "4"}
            ]
        };
    }

    MapLinks(props) {
        const links = props.links
        const listLinks = links.map((link) =>
            <div>
                {this.Test(link.title) ? (
                    <li className="nav-item active" key={link.key}>
                        <a className="nav-link" href={link.href}>{link.title}<span className="sr-only">(current)</span></a>
                    </li>
                ) : (
                    <li className="nav-item" key={link.key}>>
                        <a className="nav-link" href={link.href}>{link.title}</a>
                    </li>
                )}
            </div>
        );
        return (
            <ul className="navbar-nav mr-auto">
                {listLinks}
            </ul>
        )
    }
    /*
    componentWillMount() {
        callApi( "/api" )
            .then(get => this.setState({ response: get.response }) )
            .catch(err => console.log(err));
    }
    componentDidUpdate() {
        console.log(this.state.response);
    }
    */
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light red">
                <a className="navbar-brand" href="/">PVFD</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        {this.state.links.map(link =>
                            <div key={link.key}>
                                {this.props.title === link.title ? (
                                    <li className="nav-item active">
                                        <a className="nav-link" href={link.href}>{link.title}<span className="sr-only">(current)</span></a>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <a className="nav-link" href={link.href}>{link.title}</a>
                                    </li>
                                )}
                            </div>
                        )}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;