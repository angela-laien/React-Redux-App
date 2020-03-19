import React from 'react';
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
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
                <Button variant="contained" color="secondary" onClick={handleGetData}>
                Get Data
                </Button> 
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