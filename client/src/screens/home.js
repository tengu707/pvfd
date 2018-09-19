import React from 'react';
import {Navbar, EmergencyBanner} from '../components/index';
//import callApi from '../functions/callApi';

class Home extends React.Component {
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
                <Navbar title="Home" />
                <EmergencyBanner />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h3 className="card-title">History</h3>
                                    <p className="card-text">This explains our history</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12"><br/></div>
                        <div className="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 className="card-header">Support Petrolia Fire Department</h4>
                                    <h5 className="card-title">Use the links below to learn how to support your local fire department</h5>
                                    <div className="container">
                                        <div className="row">
                                            <p className="col-6 card-text"><a href="/donate">Donate Today</a></p>
                                            <p className="col-6 card-text"><a href="/volunteer">Learn how to Volunteer</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 className="card-header">Recent Incedents</h4>
                                    <ul className="list-group list-group-flush">
                                        <li class="list-group-item">15 Acre Wildland Fire next to Triple Junction Highschool</li>
                                        <li class="list-group-item">Another Incident</li>
                                        <li class="list-group-item">Something else</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;