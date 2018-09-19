import React from 'react';
import {Navbar, EmergencyBanner} from '../components';
//import callApi from '../functions/callApi';

class ErrorPage extends React.Component {
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
                <Navbar title="" />
                <EmergencyBanner />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 className="card-header">Error</h4>
                                    <h5 className="card-title">We could not find the page you requested. <a href="/">Click here to go to the homepage</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage;