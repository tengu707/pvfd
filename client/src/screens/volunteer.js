import React from 'react';
import {Navbar, EmergencyBanner} from '../components/index';
//import callApi from '../functions/callApi';

class Volunteer extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            response: [{}]
        };
    }

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
            <div>
                <Navbar title="Volunteer" />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="module">
                                    <h1 className="text3 center">Volunteer</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <EmergencyBanner />
                    <div className="container">
                        <div className="row">
                            <div className="col-6"><h3 className="module text1 center">Item 1</h3></div>
                            <div className="col-6"><h3 className="module text1 center">Item 2</h3></div>
                            <div className="col-6"><h3 className="module text1 center">Item 3</h3></div>
                            <div className="col-6"><h3 className="module text1 center">Item 4</h3></div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Volunteer;