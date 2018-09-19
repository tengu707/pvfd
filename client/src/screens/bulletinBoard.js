import React from 'react';
import {Navbar, EmergencyBanner} from '../components/index';
//import callApi from '../functions/callApi';

class BulletinBoard extends React.Component {
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
                <Navbar title="Bulletin Board" />
                    <EmergencyBanner />
                    <div className="container">
                        <div className="row">
                            <div className="col-12"><h3 className="module text1 center">Next Training: 9-4</h3></div>
                            <div className="col-12"><h3 className="module text1 center">Next Work Party: 9-11</h3></div>
                            <div className="col-12"><h3 className="module text1 center">Next Board Meeting: 9-18</h3></div>
                            <div className="col-12"><h3 className="module text1 center">Haunted House: 10-31</h3></div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default BulletinBoard;