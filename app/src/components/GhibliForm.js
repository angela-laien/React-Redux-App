import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/ghibliActions';

const GhibliForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };
    return (
        <div>
            {props.isFetchingData ? (
                <div>We are fetching data...</div>
            ) : (
                <button onClick={handleGetData}>Get Data</button>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(GhibliForm);