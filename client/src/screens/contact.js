import React from 'react';
import {Navbar, EmergencyBanner} from '../components/index';
//import callApi from '../functions/callApi';

class Contact extends React.Component {
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
                <Navbar title="Contact" />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="module">
                                    <h1 className="text3 center">Contact Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <EmergencyBanner />
                    <div className="container">
                        <div className="row">
                            <div className="col-6"><h3 className="module text1 center">Emergency Calls: 629-3535</h3><br /></div><br />
                            <div className="col-6"><h3 className="module text1 center">Non-Emergency Calls: 629-3558</h3><br /></div>
                            <div className="col-12"><h3 className="module text1 center">Address: XX Sherman St. Petrolia, CA 95558</h3><br /></div>
                            <div className="col-6"><h3 className="module text1 center">Mail: P.O. Box XXX Petrolia, CA 95558</h3><br /></div>
                            <div className="col-6"><h3 className="module text1 center">Email: travis@PFVD.com</h3><br /></div>

                        </div>
                    </div>
            </div>
        )
    }
}

export default Contact;