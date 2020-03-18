import React from 'react';
import { connect } from 'react-redux';

const GhibliList = props => {
    return(
        <div>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                props.ghibli.map(movie => <div>{movie.title}
                </div>)
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ghibli: state.ghibli,
        error: state.error
    };
};
export default connect(
    mapStateToProps,
    {}
)(GhibliList);