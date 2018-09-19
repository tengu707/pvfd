import React from 'react';
//import callApi from '../functions/callApi';

class EmergencyBanner extends React.Component {
    /*
    constructor(props) {
        super(props);
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
            <div class="scroll-box">
                <h3 className="scroll-1">If this is an emergency call 911.</h3>
                <h3 className="scroll-2">If this is an emergency call 911.</h3>
            </div>
        )
    }
}

export default EmergencyBanner;