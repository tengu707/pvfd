import React from 'react';
import {Navbar, EmergencyBanner} from '../components/index';
//import callApi from '../functions/callApi';

class Donate extends React.Component {
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
                <Navbar title="Donate" />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="module">
                                    <h1 className="text3 center">Donate</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <EmergencyBanner />
                    <div className="container">
                        <div className="row">
                            <div className="col-12"><a href="/"><h3 className="module text1 center">Donate online through PayPal</h3></a></div>
                            <div className="col-12"><h3 className="module text1 center">Checks accepted at the Petrolia General Store</h3></div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Donate;